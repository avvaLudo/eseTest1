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
import { Movie } from './Movie';
/**
 * Request builder class for operations supported on the {@link Movie} entity.
 */
export declare class MovieRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Movie<T>, T> {
  /**
   * Returns a request builder for querying all `Movie` entities.
   * @returns A request builder for creating requests to retrieve all `Movie` entities.
   */
  getAll(): GetAllRequestBuilder<Movie<T>, T>;
  /**
   * Returns a request builder for creating a `Movie` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Movie`.
   */
  create(entity: Movie<T>): CreateRequestBuilder<Movie<T>, T>;
  /**
   * Returns a request builder for retrieving one `Movie` entity based on its keys.
   * @param movieId Key property. See {@link Movie.movieId}.
   * @returns A request builder for creating requests to retrieve one `Movie` entity based on its keys.
   */
  getByKey(
    movieId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Movie<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Movie`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Movie`.
   */
  update(entity: Movie<T>): UpdateRequestBuilder<Movie<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Movie`.
   * @param movieId Key property. See {@link Movie.movieId}.
   * @returns A request builder for creating requests that delete an entity of type `Movie`.
   */
  delete(movieId: string): DeleteRequestBuilder<Movie<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Movie`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Movie` by taking the entity as a parameter.
   */
  delete(entity: Movie<T>): DeleteRequestBuilder<Movie<T>, T>;
}
