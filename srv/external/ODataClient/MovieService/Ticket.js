"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "Ticket" of service "MovieService".
 */
class Ticket extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Ticket = Ticket;
/**
 * Technical entity name for Ticket.
 */
Ticket._entityName = 'Ticket';
/**
 * Default url path for the according service.
 */
Ticket._defaultBasePath = '/odata/v4/movie';
/**
 * All key fields of the Ticket entity
 */
Ticket._keys = ['TicketNumber'];
//# sourceMappingURL=Ticket.js.map