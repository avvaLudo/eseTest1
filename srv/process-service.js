const connectivity = require('@sap-cloud-sdk/connectivity');
const { getIncident } = require('./lib/handler');
const { movieService } = require('./external/ODataClient/MovieService');
const cds = require("@sap/cds");

module.exports = cds.service.impl(async function () {
    const { Incidenti, Movie } = this.entities;

    // Implementazione della function getOpenIncidentsCount
    this.on('getOpenIncidentsCount', async () => {
        const count = await SELECT.one('count(*) as count').from(Incidenti).where({ status: 'Aperto' });
        return count.count;
    });

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
        const movie =  movieApi.entityBuilder().movieId('100').title('Pippo e pluto in vacanza').author('Walt Disney').genre('per bambini').year('2000').build();
        await movieApi.requestBuilder().create(movie).execute({destinationName:'fabioDest'});
    });


    this.on('testOdataCreateDy', async (request) =>{
        const { movieApi } = movieService();
        const {MovieID, title, author, genre, year} = request.data;
        const movie =  movieApi.entityBuilder().movieId(MovieID).title(title).author(author).genre(genre).year(year).build();
        await movieApi.requestBuilder().create(movie).execute({destinationName:'fabioDest'});
    });


    this.on('testOdataUpdateG', async (request)=>{
        const { movieApi } = movieService();
        const {MovieID, genre} = request.data;
        const movie = await movieApi.requestBuilder().getByKey(MovieID).execute({ destinationName: 'fabioDest' });
        movie.genre = genre;
        await movieApi.requestBuilder().update(movie).execute({destinationName:'fabioDest'});
    });


    this.on('testOdataDelete', async(request)=>{
        const { movieApi } = movieService();
        const {MovieID} = request.data;
        const movie = await movieApi.requestBuilder().getByKey(MovieID).execute({destinationName:'fabioDest'});
        await movieApi.requestBuilder().delete(movie).execute({destinationName:'fabioDest'});
    });
});

