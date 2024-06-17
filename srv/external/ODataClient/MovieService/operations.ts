/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  edmToTs,
  transformReturnValueForEdmTypeList,
  transformReturnValueForEdmType,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { movieService } from './service';

/**
 * Type of the parameters to be passed to {@link getIncident}.
 */
export interface GetIncidentParameters<DeSerializersT extends DeSerializers> {}

/**
 * Get Incident.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function getIncident<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GetIncidentParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  GetIncidentParameters<DeSerializersT>,
  string[]
> {
  const params = {};

  return new OperationRequestBuilder(
    '/odata/v4',
    'getIncident',
    data =>
      transformReturnValueForEdmTypeList(data, val =>
        edmToTs(val, 'Edm.String', deSerializers)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link sum}.
 */
export interface SumParameters<DeSerializersT extends DeSerializers> {}

/**
 * Sum.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sum<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SumParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  SumParameters<DeSerializersT>,
  number | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/odata/v4',
    'sum',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.Int32', deSerializers)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link add}.
 */
export interface AddParameters<DeSerializersT extends DeSerializers> {
  /**
   * X.
   */
  x?: number | null;
  /**
   * Y.
   */
  y?: number | null;
}

/**
 * Add.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function add<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AddParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  AddParameters<DeSerializersT>,
  number | null
> {
  const params = {
    x: new OperationParameter('x', 'Edm.Int32', parameters.x),
    y: new OperationParameter('y', 'Edm.Int32', parameters.y)
  };

  return new OperationRequestBuilder(
    '/odata/v4',
    'add',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.Int32', deSerializers)
      ),
    params,
    deSerializers,
    'action'
  );
}

export const operations = {
  getIncident,
  sum,
  add
};
