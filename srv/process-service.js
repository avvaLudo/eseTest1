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
        const service = await cds.connect.to('fabio');
        this.on('READ', Movie, async (request) => {
            return service.run(request.query);
        });
    });

    this.on('testOdata', async (request) => {
        const { cinemaApi } = movieService();
        return await cinemaApi.requestBuilder().getAll().execute({ destinationName: 'calltest2' });
    });

});