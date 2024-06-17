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
import { Cinema } from './Cinema';
/**
 * Request builder class for operations supported on the {@link Cinema} entity.
 */
export declare class CinemaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Cinema<T>, T> {
  /**
   * Returns a request builder for querying all `Cinema` entities.
   * @returns A request builder for creating requests to retrieve all `Cinema` entities.
   */
  getAll(): GetAllRequestBuilder<Cinema<T>, T>;
  /**
   * Returns a request builder for creating a `Cinema` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Cinema`.
   */
  create(entity: Cinema<T>): CreateRequestBuilder<Cinema<T>, T>;
  /**
   * Returns a request builder for retrieving one `Cinema` entity based on its keys.
   * @param cinId Key property. See {@link Cinema.cinId}.
   * @returns A request builder for creating requests to retrieve one `Cinema` entity based on its keys.
   */
  getByKey(
    cinId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Cinema<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Cinema`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Cinema`.
   */
  update(entity: Cinema<T>): UpdateRequestBuilder<Cinema<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Cinema`.
   * @param cinId Key property. See {@link Cinema.cinId}.
   * @returns A request builder for creating requests that delete an entity of type `Cinema`.
   */
  delete(cinId: string): DeleteRequestBuilder<Cinema<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Cinema`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Cinema` by taking the entity as a parameter.
   */
  delete(entity: Cinema<T>): DeleteRequestBuilder<Cinema<T>, T>;
}
