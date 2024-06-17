/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MovieApi } from './MovieApi';
import { CinemaApi } from './CinemaApi';
import { TicketApi } from './TicketApi';
import {
  GetIncidentParameters,
  SumParameters,
  AddParameters
} from './operations';
import { BigNumber } from 'bignumber.js';
import { Moment, Duration } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';
export declare function movieService<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateT = Moment,
  DurationT = Duration,
  TimeOfDayT = Time,
  EnumT = any
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateT,
      DurationT,
      TimeOfDayT,
      EnumT
    >
  >
): MovieService<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateT,
    DurationT,
    TimeOfDayT,
    EnumT
  >
>;
declare class MovieService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get movieApi(): MovieApi<DeSerializersT>;
  get cinemaApi(): CinemaApi<DeSerializersT>;
  get ticketApi(): TicketApi<DeSerializersT>;
  get operations(): {
    getIncident: (
      parameter: GetIncidentParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v4').OperationRequestBuilder<
      DeSerializersT,
      GetIncidentParameters<DeSerializersT>,
      string[]
    >;
    sum: (
      parameter: SumParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v4').OperationRequestBuilder<
      DeSerializersT,
      SumParameters<DeSerializersT>,
      number | null
    >;
    add: (
      parameter: AddParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v4').OperationRequestBuilder<
      DeSerializersT,
      AddParameters<DeSerializersT>,
      number | null
    >;
  };
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
