const { getIncident } = require('./lib/handler');
const { movieService } = require('./external/ODataClient/MovieService');
const cds = require("@sap/cds");
const { json2xml } = require('xml-js');
const client = require('@sap-cloud-sdk/http-client');




module.exports = cds.service.impl(async function () {
    const { Incidenti, Movie, Afe, Persone, DescrizioneIncidentePerPersona, IncidentiPersone, Libro, Autore, Archivio } = this.entities;

    // Implementazione della function getOpenIncidentsCount
    this.on('getOpenIncidentsCount', async () => {
        const count = await SELECT.one('count(*) as count').from(Incidenti).where({ status: 'Aperto' });
        return count.count;
    });

    /* commento perchè logica troppo semplice e perchè le read vanno in conflitto con la get incidenti nel http
       this.before('UPDATE', Incidenti, req => {
           const stato = req.data.status;
           if (stato != "chiuso" && stato != "aperto") req.error`${{ stato }} must be = ${'aperto o chiuso'}`
       });
   
      this.on('READ', Incidenti, async req => {
           const incidentiChiusi = await SELECT.from(Incidenti).where({ status: 'chiuso' });
           return incidentiChiusi;
       });
       
   
       this.after('READ', Incidenti, incidentiChiusi => {  //incidenti è la risposta della .on
           const numIncChiusi = incidentiChiusi.length;
           console.log("gli incidenti chiusi sono: ", numIncChiusi );
           
       });*/
    /******************************************BEFORE********************************************/

    this.before('CREATE', Incidenti, async req => {
        const priority = req.data.priority;
        const stato = req.data.status;
        if (stato != "chiuso" && stato != "aperto") req.error`${{ stato }} must be = ${'aperto o chiuso'}`
        const priorityValid = ["bassa", "alta", "media"];
        if (!priorityValid.includes(priority)) {
            req.error(400, `La priorità deve essere una di: ${priorityValid.join(", ")}`);
        }
    });

    /******************************************ON********************************************/

    this.on("CREATE", Incidenti, async req => {
        const { ID, title, description, status, priority } = req.data;
        if (!title || !description || !status || !priority) {
            req.error(400, 'Title, description, status  and priority sono richiesti');
            return;
        }
        const newIncidente = {
            ID,
            title,
            description,
            status,
            priority
        };

        if (await INSERT.into(Incidenti).entries(newIncidente)) {
            return newIncidente;
        } else {
            return false;
        }
    });

    /******************************************AFTER********************************************/

    /* this.after("CREATE", Incidenti, async nuovoIncidente =>{
         console.log("nuovo incidente:", nuovoIncidente);
         return nuovoIncidente;
     });*/

    this.after("CREATE", Incidenti, async (nuovoIncidente, req) => {
        if (nuovoIncidente.priority == "alta") {
            const pID = req.data.pID;
            const nome = req.data.nome;
            const cognome = req.data.cognome;
            const nuovaPersona = {
                pID,
                nome,
                cognome,
                idIncidenti: nuovoIncidente.ID
            };
            if (await cds.run(INSERT.into(Persone).entries(nuovaPersona))) {                //await INSERT.into(Persone).entries(nuovaPersona)
                await this.emit('NuovaPersonaCreata', nuovaPersona);
                return nuovaPersona;
            } else {
                return false;
            }
        }
    });

    /*****************************************SEND*********************************************/
    this.on("leggiTutti", async req => {
        return await this.send('GET', '/Persone');
    });

    this.on("READ", Persone, async req => {
        const pers = await SELECT.from(Persone);
        return pers;
    })

    /****************************************EMIT**************************************************/

    this.on('NuovaPersonaCreata', msg => {
        const nuovaPersona = msg.data;
        console.log('Nuova persona creata:', nuovaPersona);
    });

    /***************************************tx*******************************************************/
    this.on('newTransaction', async req => {
        const tx = this.tx()
        try {
            let exists = await tx.run(SELECT.from(Incidenti, req.data.ID).forUpdate())
            if (exists) await tx.update(Incidenti, req.data.ID).with(req.data)
            else await tx.create(Incidenti, { ID: req.data.ID, ...req.data })
            await tx.commit()
        } catch (e) {
            await tx.rollback(e) // will rethrow e
        }
    });
    /*****************************************tx con select esterna***********************************/
    this.on('newTransaction2', async req => {
        const tx = this.tx()
        let exists = await SELECT.from(Incidenti, req.data.ID);
        try {
            if (exists) await tx.update(Incidenti, req.data.ID).with(req.data)
            else await tx.create(Incidenti, { ID: req.data.ID, ...req.data })
            await tx.commit()
        } catch (e) {
            await tx.rollback(e) // will rethrow e
        }
    });
    /*************************************************************************************************/

    // Implementazione della action closeIncident
    this.on('addIncident', async req => {
        const { ID, title, description, status, priority } = req.data;
        if (!title || !description || !status || !priority) {
            req.error(400, 'Title, description, status  and priority sono richiesti');
            return;
        }
        const newIncidente = {
            ID,
            title,
            description,
            status,
            priority
        };

        if (await INSERT.into(Incidenti).entries(newIncidente)) {
            return true;
        } else {
            return false;
        }
    });


    this.on('getIncident', async (request) => {
        return await getIncident(request);
    });


    module.exports = cds.service.impl(async function () {
        const service = await cds.connect.to('movieService');
        this.on('*', Movie, async (request) => {
            return service.run(request.query);
        });
    });

    this.on('testOdata', async (request) => {
        const { movieApi } = movieService();
        return await movieApi.requestBuilder().getAll().execute({ destinationName: 'fabioDest' });
    });

    this.on('testOdataCreate', async (request) => {
        const { movieApi } = movieService();
        const movie = movieApi.entityBuilder().movieId('100').title('Pippo e pluto in vacanza').author('Walt Disney').genre('per bambini').year('2000').build();
        await movieApi.requestBuilder().create(movie).execute({ destinationName: 'fabioDest' });
    });


    this.on('testOdataCreateDy', async (request) => {
        const { movieApi } = movieService();
        const { MovieID, title, author, genre, year } = request.data;
        const movie = movieApi.entityBuilder().movieId(MovieID).title(title).author(author).genre(genre).year(year).build();
        await movieApi.requestBuilder().create(movie).execute({ destinationName: 'fabioDest' });
    });


    this.on('testOdataUpdateG', async (request) => {
        const { movieApi } = movieService();
        const { MovieID, genre } = request.data;
        const movie = await movieApi.requestBuilder().getByKey(MovieID).execute({ destinationName: 'fabioDest' });
        movie.genre = genre;
        await movieApi.requestBuilder().update(movie).execute({ destinationName: 'fabioDest' });
    });


    this.on('testOdataDelete', async (request) => {
        const { movieApi } = movieService();
        const { MovieID } = request.data;
        const movie = await movieApi.requestBuilder().getByKey(MovieID).execute({ destinationName: 'fabioDest' });
        await movieApi.requestBuilder().delete(movie).execute({ destinationName: 'fabioDest' });
    });

    this.on('testMail', async (request) => {
        const recipient = 'fabio.fierro@avvale.com';
        const subject = 'bubumilano';
        const body = 'bubumilano';
        const pdfPath = '../tmp.pdf';

        /*const BASE64_MARKER = ';base64,';

        const convertStringPdfToBinary = (request) => {
            const base64Index = request.data.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
            const base64 = request.data.substring(base64Index);
            return new Uint8Array(decode(base64));
        };
        */

        // await sendEmailWithPDF(recipient, subject, body, pdfPath);
    });

    this.on('testPdf', async (request) => {
        const arrayId = request.data.OrderNumbers;

        const arrayQuery = await SELECT.from(Afe).where({ ordernumber: arrayId });

        const query = await SELECT.from(Afe).columns('ordernumber', 'testoafe', 'amount', 'currency', 'fy', 'location', 'responsabile', 'chiusura').where({ ordernumber: arrayId });

        const transformedJson = {
            Afe: {
                item: query
            }
        };

        const xmlafe = json2xml(transformedJson, { compact: true, spaces: 4, ignoreComment: true });

        const btoas = btoa(xmlafe);

        const form = {
            xdpTemplate: "Q8newmodulo/Q8newtemplate", xmlData: btoas,
            formType: "print", formLocale: "", taggedPdf: "1", embedFont: "0"
        };


        let pdfResp = await new Promise(async (resolve, reject) => {
            client.executeHttpRequest({ destinationName: "formServiceDest" }, {
                method: 'POST',
                url: '/v1/adsRender/pdf?templateSource=storageName',
                data: form
            }).then((result) => {
                resolve(result);
            }).catch((e) => {
                reject(e);
                console.log(e);
            });
        });

        return pdfResp.data.fileContent;

    });

    /************************QUERY TEST ASSOCIAZIONE************************************/
    this.on('inserimentoPersona', async (req) => {
        const { pID, nome, cognome, idIncidenti } = req.data;
        if (!pID || !nome || !cognome || !idIncidenti) {
            req.error(400, 'ID, nome, cognome, idIncidenti sono richiesti');
            return;
        }
        const newPersona = {
            pID,
            nome,
            cognome,
            idIncidenti
        };

        if (await INSERT.into(Persone).entries(newPersona)) {
            return true;
        } else {
            return false;
        }

    });


    this.on("leggiPersoneIncidente", async req => {
        const ID = req.data.idIncidenti;
        const persone = await SELECT.from(Persone).columns('nome', 'cognome').where({ idIncidenti: ID });
        return persone;
    });

    this.on('getDescrizioneIncidentePerPersona', async (req) => {
        const { pID } = req.data; // Recupera l'ID della persona da req.data

        const query = await SELECT.from(DescrizioneIncidentePerPersona)
            .where({ pID });

        return query;
    });

    this.on('getPersoneIncidentiAperti', async req => {  //ritorna le persone coinvolte in un incidente ancora aperto
        return await SELECT.from(IncidentiPersone).columns('nome', 'cognome', 'DescrizioneIncidente', 'PrioritaIncidente')
            .where({ StatusIncidente: 'aperto' });
    })
/***********************************************************************************************************************/
    this.before('CREATE', Archivio, async req => {
        const { autore_aID, libro_lID } = req.data;
        if (!autore_aID || !libro_lID) {
            req.error(400, 'IDlibro e IDautore sono richiesti');
            return false;
        }
        const autoreEx = await SELECT.from(Autore).where({ aID: req.data.autore_aID });
        if (!autoreEx.length) {
            req.error(400, 'Autore non trovato');
            return false;
        }
        const libroEx = await SELECT.from(Libro).where({ lID: req.data.libro_lID })
        if (!libroEx.length) {
            req.error(400, 'Libro non trovato');
            return false;
        }
    });

/********************************QUERY HTTP IN CODICE**************************************************/

//Stampa dati autore e libro con id = 1

    this.on('stampaALByID', async req=>{
        const autore_aID=1;
        const libro_lID=1;
        return await SELECT.from(Archivio)
        .columns('autore_aID.aID', 'autore_aID.nome', 'libro_lID.lID', 'libro_lID.titolo', 'libro_lID.anno', 'libro_lID.pagine')
        .where({ autore_aID_aID: autore_aID, libro_lID_lID: libro_lID });
    });

//Stampa tutti i libri di un determinato id autore

    this.on('stampaLByAutore', async req=>{
        const {autore_aID, libro_lID}=req.data;
        return await SELECT.from(Archivio)
        .columns('libro_lID.lID', 'libro_lID.titolo', 'libro_lID.anno', 'libro_lID.pagine')
        .where({autore_aID_aID: autore_aID});
    });



    


});


