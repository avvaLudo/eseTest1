"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Movie_1 = require("./Movie");
const MovieRequestBuilder_1 = require("./MovieRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class MovieApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Movie_1.Movie;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new MovieApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new MovieRequestBuilder_1.MovieRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Movie_1.Movie, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link movieId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MOVIE_ID: fieldBuilder.buildEdmTypeField('MovieID', 'Edm.String', false),
                /**
                 * Static representation of the {@link title} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
                /**
                 * Static representation of the {@link author} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHOR: fieldBuilder.buildEdmTypeField('author', 'Edm.String', true),
                /**
                 * Static representation of the {@link genre} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GENRE: fieldBuilder.buildEdmTypeField('genre', 'Edm.String', true),
                /**
                 * Static representation of the {@link year} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                YEAR: fieldBuilder.buildEdmTypeField('year', 'Edm.Int32', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Movie_1.Movie)
            };
        }
        return this._schema;
    }
}
exports.MovieApi = MovieApi;
//# sourceMappingURL=MovieApi.js.map