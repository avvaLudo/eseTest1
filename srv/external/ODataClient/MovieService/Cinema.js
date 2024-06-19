"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cinema = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "Cinema" of service "MovieService".
 */
class Cinema extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Cinema = Cinema;
/**
 * Technical entity name for Cinema.
 */
Cinema._entityName = 'Cinema';
/**
 * Default url path for the according service.
 */
Cinema._defaultBasePath = '/odata/v4/movie';
/**
 * All key fields of the Cinema entity
 */
Cinema._keys = ['CinID'];
//# sourceMappingURL=Cinema.js.map