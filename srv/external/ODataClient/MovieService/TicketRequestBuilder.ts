/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { Ticket } from './Ticket';

/**
 * Request builder class for operations supported on the {@link Ticket} entity.
 */
export class TicketRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Ticket<T>, T> {
  /**
   * Returns a request builder for querying all `Ticket` entities.
   * @returns A request builder for creating requests to retrieve all `Ticket` entities.
   */
  getAll(): GetAllRequestBuilder<Ticket<T>, T> {
    return new GetAllRequestBuilder<Ticket<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Ticket` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Ticket`.
   */
  create(entity: Ticket<T>): CreateRequestBuilder<Ticket<T>, T> {
    return new CreateRequestBuilder<Ticket<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Ticket` entity based on its keys.
   * @param ticketNumber Key property. See {@link Ticket.ticketNumber}.
   * @returns A request builder for creating requests to retrieve one `Ticket` entity based on its keys.
   */
  getByKey(
    ticketNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Ticket<T>, T> {
    return new GetByKeyRequestBuilder<Ticket<T>, T>(this.entityApi, {
      TicketNumber: ticketNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Ticket`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Ticket`.
   */
  update(entity: Ticket<T>): UpdateRequestBuilder<Ticket<T>, T> {
    return new UpdateRequestBuilder<Ticket<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Ticket`.
   * @param ticketNumber Key property. See {@link Ticket.ticketNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Ticket`.
   */
  delete(ticketNumber: string): DeleteRequestBuilder<Ticket<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Ticket`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Ticket` by taking the entity as a parameter.
   */
  delete(entity: Ticket<T>): DeleteRequestBuilder<Ticket<T>, T>;
  delete(ticketNumberOrEntity: any): DeleteRequestBuilder<Ticket<T>, T> {
    return new DeleteRequestBuilder<Ticket<T>, T>(
      this.entityApi,
      ticketNumberOrEntity instanceof Ticket
        ? ticketNumberOrEntity
        : { TicketNumber: ticketNumberOrEntity! }
    );
  }
}
