/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
/**
 * Type of the parameters to be passed to {@link getIncident}.
 */
export interface GetIncidentParameters<DeSerializersT extends DeSerializers> {}
/**
 * Get Incident.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function getIncident<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GetIncidentParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  GetIncidentParameters<DeSerializersT>,
  string[]
>;
/**
 * Type of the parameters to be passed to {@link sum}.
 */
export interface SumParameters<DeSerializersT extends DeSerializers> {}
/**
 * Sum.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function sum<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SumParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  SumParameters<DeSerializersT>,
  number | null
>;
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
export declare function add<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AddParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  AddParameters<DeSerializersT>,
  number | null
>;
export declare const operations: {
  getIncident: typeof getIncident;
  sum: typeof sum;
  add: typeof add;
};
