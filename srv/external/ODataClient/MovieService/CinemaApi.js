"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CinemaApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Cinema_1 = require("./Cinema");
const CinemaRequestBuilder_1 = require("./CinemaRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class CinemaApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Cinema_1.Cinema;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new CinemaApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CinemaRequestBuilder_1.CinemaRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Cinema_1.Cinema, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link cinId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CIN_ID: fieldBuilder.buildEdmTypeField('CinID', 'Edm.String', false),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
                /**
                 * Static representation of the {@link location} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOCATION: fieldBuilder.buildEdmTypeField('Location', 'Edm.String', true),
                /**
                 * Static representation of the {@link roomsNo} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROOMS_NO: fieldBuilder.buildEdmTypeField('RoomsNo', 'Edm.Int32', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Cinema_1.Cinema)
            };
        }
        return this._schema;
    }
}
exports.CinemaApi = CinemaApi;
//# sourceMappingURL=CinemaApi.js.map