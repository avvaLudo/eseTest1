using { com.avvale.ld09.acdm2024 as db } from '../db/schema';
using { MovieService } from './external/MovieService.csn';

service ProcessorService {
    @requires: 'authenticated-user' 
    entity Incidenti as projection on db.Incidenti;

    @requires: 'authenticated-user'
    entity Persone as projection on db.Persone;

    @requires: 'authenticated-user'
    entity Movie as projection on MovieService.Movie;

    // Function per ottenere il conteggio degli incidenti aperti
    function getOpenIncidentsCount() returns Integer;
    
    @requires: 'authenticated-user'
    function getIncident() returns array of String;

    @requires: 'authenticated-user'
    function testOdata() returns array of String;

    @requires: 'authenticated-user'
    action testOdataCreate();   

    @requires: 'authenticated-user'
    action testOdataCreateDy(MovieID: String(5), title: String(100), author: String(30), genre: String(30), year: Integer);    

    @requires: 'authenticated-user'
    action testOdataUpdateG(MovieID: String (5), genre: String(30));

    @requires: 'authenticated-user'
    action testOdataDelete(MovieID: String (5));

    // Action per chiudere un incidente
    action addIncident(ID: Integer, title: String(100), description: String(1000), status: String(20), priority: String(20)) returns Boolean;
}
