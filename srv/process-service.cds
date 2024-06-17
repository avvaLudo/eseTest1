using { com.avvale.ld09.acdm2024 as db } from '../db/schema';
using { fabio } from './external/fabio.csn';

service ProcessorService {
    @requires: 'authenticated-user' 
    entity Incidenti as projection on db.Incidenti;

    @requires: 'authenticated-user'
    entity Persone as projection on db.Persone;

    @requires: 'authenticated-user'
    entity Movie as projection on fabio.Movie;

    // Function per ottenere il conteggio degli incidenti aperti
    function getOpenIncidentsCount() returns Integer;
    
    @requires: 'authenticated-user'
    function getIncident() returns array of String;

    @requires: 'authenticated-user'
    function testOdata() returns array of String;

    // Action per chiudere un incidente
    action addIncident(ID: Integer, title: String(100), description: String(1000), status: String(20), priority: String(20)) returns Boolean;
}
