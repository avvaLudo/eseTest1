"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieService = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MovieApi_1 = require("./MovieApi");
const CinemaApi_1 = require("./CinemaApi");
const TicketApi_1 = require("./TicketApi");
const operations_1 = require("./operations");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const BatchRequest_1 = require("./BatchRequest");
function movieService(deSerializers = odata_v4_1.defaultDeSerializers) {
    return new MovieService((0, odata_v4_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.movieService = movieService;
class MovieService {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get movieApi() {
        return this.initApi('movieApi', MovieApi_1.MovieApi);
    }
    get cinemaApi() {
        return this.initApi('cinemaApi', CinemaApi_1.CinemaApi);
    }
    get ticketApi() {
        return this.initApi('ticketApi', TicketApi_1.TicketApi);
    }
    get operations() {
        return {
            getIncident: (parameter) => (0, operations_1.getIncident)(parameter, this.deSerializers),
            sum: (parameter) => (0, operations_1.sum)(parameter, this.deSerializers),
            add: (parameter) => (0, operations_1.add)(parameter, this.deSerializers)
        };
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map