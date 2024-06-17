"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CinemaRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Cinema_1 = require("./Cinema");
/**
 * Request builder class for operations supported on the {@link Cinema} entity.
 */
class CinemaRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Cinema` entities.
     * @returns A request builder for creating requests to retrieve all `Cinema` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Cinema` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Cinema`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Cinema` entity based on its keys.
     * @param cinId Key property. See {@link Cinema.cinId}.
     * @returns A request builder for creating requests to retrieve one `Cinema` entity based on its keys.
     */
    getByKey(cinId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            CinID: cinId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Cinema`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Cinema`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(cinIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, cinIdOrEntity instanceof Cinema_1.Cinema
            ? cinIdOrEntity
            : { CinID: cinIdOrEntity });
    }
}
exports.CinemaRequestBuilder = CinemaRequestBuilder;
//# sourceMappingURL=CinemaRequestBuilder.js.map