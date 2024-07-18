using {com.avvale.ld09.acdm2024 as db} from '../db/schema';
using {MovieService} from './external/MovieService.csn';

service ProcessorService {
    @requires: 'authenticated-user'
    entity Incidenti as projection on db.Incidenti;

    @requires: 'authenticated-user'
    entity Persone   as projection on db.Persone;


    @requires: 'authenticated-user'
    entity Movie     as projection on MovieService.Movie;

    @requires: 'authenticated-user'
    entity Afe       as projection on db.Afe;

    @requires: 'authenticated-user'
    entity Libro     as projection on db.Libro;

    @requires: 'authenticated-user'
    entity Autore    as projection on db.Autore;

    @requires: 'authenticated-user'
    entity Archivio  as projection on db.Archivio;


    @readonly
    view DescrizioneIncidentePerPersona as
        select from Persone as Persona
        join db.Incidenti as Incidente
            on Persona.idIncidenti = Incidente.ID
        {
            Persona.pID,
            Persona.nome,
            Persona.cognome,
            Incidente.description as DescrizioneIncidente
        };

    @readonly
    view IncidentiPersone as
        select from Persone as Persona
        join db.Incidenti as Incidente
            on Persona.idIncidenti = Incidente.ID
        {
            Persona.pID,
            Persona.nome,
            Persona.cognome,
            Persona.idIncidenti,
            Incidente.title       as TitoloIncidente,
            Incidente.description as DescrizioneIncidente,
            Incidente.status      as StatusIncidente,
            Incidente.priority    as PrioritaIncidente
        };


    // Function per ottenere il conteggio degli incidenti aperti
    function getOpenIncidentsCount()                                                                                                returns Integer;

    @requires: 'authenticated-user'
    function getIncident()                                                                                                          returns array of String;

    @requires: 'authenticated-user'
    function leggiTutti()                                                                                                           returns array of String;

    @requires: 'authenticated-user'
    function testOdata()                                                                                                            returns array of String;

    @requires: 'authenticated-user'
    function getPersoneIncidentiAperti()                                                                                            returns array of String;


    @requires: 'authenticated-user'
    action   testOdataCreate();

    @requires: 'authenticated-user'
    action   testOdataCreateDy(MovieID : String(5), title : String(100), author : String(30), genre : String(30), year : Integer);

    @requires: 'authenticated-user'
    action   testOdataUpdateG(MovieID : String(5), genre : String(30));

    @requires: 'authenticated-user'
    action   testOdataDelete(MovieID : String(5));

    @requires: 'authenticated-user'
    action   testMail();

    @requires: 'authenticated-user'
    action   testPdf(OrderNumbers : array of Integer)                                                                               returns String;

    // Action per chiudere un incidente
    action   addIncident(ID : Integer, title : String(100), description : String(1000), status : String(20), priority : String(20)) returns Boolean;

    @requires: 'authenticated-user'
    action   newTransaction(ID : Integer, title : String(100), description : String(1000), status : String(20), priority : String(20));

    @requires: 'authenticated-user'
    action   newTransaction2(ID : Integer, title : String(100), description : String(1000), status : String(20), priority : String(20));

    @requires: 'authenticated-user'
    action   inserimentoPersona(pID : Integer, nome : String, cognome : String, idIncidenti : Integer)                              returns array of String;

    @requires: 'authenticated-user'
    action   leggiPersoneIncidente(idIncidenti : Integer)                                                                           returns array of String;

    @requires: 'authenticated-user'
    action   getDescrizioneIncidentePerPersona(pID : Integer)                                                                       returns array of String;

    @requires: 'authenticated-user'
    action   inserimentoArchivio(autore_aID : Integer, libro_lID: Integer )                                                                                                                              returns array of String;

    @requires : 'authenticated-user'
    function stampaALByID () returns array of String;


    @requires : 'authenticated-user'
    action stampaLByAutore(autore_aID:Integer) returns array of String;
}
