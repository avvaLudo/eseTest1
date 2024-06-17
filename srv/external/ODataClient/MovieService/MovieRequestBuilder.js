"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Movie_1 = require("./Movie");
/**
 * Request builder class for operations supported on the {@link Movie} entity.
 */
class MovieRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Movie` entities.
     * @returns A request builder for creating requests to retrieve all `Movie` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Movie` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Movie`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Movie` entity based on its keys.
     * @param movieId Key property. See {@link Movie.movieId}.
     * @returns A request builder for creating requests to retrieve one `Movie` entity based on its keys.
     */
    getByKey(movieId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            MovieID: movieId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Movie`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Movie`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(movieIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, movieIdOrEntity instanceof Movie_1.Movie
            ? movieIdOrEntity
            : { MovieID: movieIdOrEntity });
    }
}
exports.MovieRequestBuilder = MovieRequestBuilder;
//# sourceMappingURL=MovieRequestBuilder.js.map