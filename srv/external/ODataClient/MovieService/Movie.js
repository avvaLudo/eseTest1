"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "Movie" of service "MovieService".
 */
class Movie extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Movie = Movie;
/**
 * Technical entity name for Movie.
 */
Movie._entityName = 'Movie';
/**
 * Default url path for the according service.
 */
Movie._defaultBasePath = '/odata/v4/movie';
/**
 * All key fields of the Movie entity
 */
Movie._keys = ['MovieID'];
//# sourceMappingURL=Movie.js.map