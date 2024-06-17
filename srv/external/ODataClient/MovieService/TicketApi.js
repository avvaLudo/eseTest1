"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Ticket_1 = require("./Ticket");
const TicketRequestBuilder_1 = require("./TicketRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class TicketApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Ticket_1.Ticket;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new TicketApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new TicketRequestBuilder_1.TicketRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Ticket_1.Ticket, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link ticketNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TICKET_NUMBER: fieldBuilder.buildEdmTypeField('TicketNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link room} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROOM: fieldBuilder.buildEdmTypeField('Room', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link day} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DAY: fieldBuilder.buildEdmTypeField('Day', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link sold} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SOLD: fieldBuilder.buildEdmTypeField('Sold', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Ticket_1.Ticket)
            };
        }
        return this._schema;
    }
}
exports.TicketApi = TicketApi;
//# sourceMappingURL=TicketApi.js.map