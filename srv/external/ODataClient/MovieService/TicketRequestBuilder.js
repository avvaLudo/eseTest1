"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Ticket_1 = require("./Ticket");
/**
 * Request builder class for operations supported on the {@link Ticket} entity.
 */
class TicketRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Ticket` entities.
     * @returns A request builder for creating requests to retrieve all `Ticket` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Ticket` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Ticket`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Ticket` entity based on its keys.
     * @param ticketNumber Key property. See {@link Ticket.ticketNumber}.
     * @returns A request builder for creating requests to retrieve one `Ticket` entity based on its keys.
     */
    getByKey(ticketNumber) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            TicketNumber: ticketNumber
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Ticket`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Ticket`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(ticketNumberOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, ticketNumberOrEntity instanceof Ticket_1.Ticket
            ? ticketNumberOrEntity
            : { TicketNumber: ticketNumberOrEntity });
    }
}
exports.TicketRequestBuilder = TicketRequestBuilder;
//# sourceMappingURL=TicketRequestBuilder.js.map