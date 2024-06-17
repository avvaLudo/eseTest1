/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import {
  Movie,
  Cinema,
  Ticket,
  GetIncidentParameters,
  SumParameters,
  AddParameters
} from './index';
/**
 * Batch builder for operations supported on the MovieService.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadMovieServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadMovieServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the MovieService.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteMovieServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteMovieServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare const defaultMovieServicePath = '/odata/v4';
export type ReadMovieServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Movie<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Cinema<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Ticket<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Movie<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Cinema<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Ticket<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      GetIncidentParameters<DeSerializersT>,
      string[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SumParameters<DeSerializersT>,
      number | null
    >;
export type WriteMovieServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Movie<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Movie<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Movie<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Cinema<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Cinema<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Cinema<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Ticket<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Ticket<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Ticket<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      AddParameters<DeSerializersT>,
      number | null
    >;
