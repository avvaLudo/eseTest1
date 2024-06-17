/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { TicketApi } from './TicketApi';
/**
 * This class represents the entity "Ticket" of service "MovieService".
 */
export declare class Ticket<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TicketType<T>
{
  /**
   * Technical entity name for Ticket.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Ticket entity
   */
  static _keys: string[];
  /**
   * Ticket Number.
   * Maximum length: 5.
   */
  ticketNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Room.
   * @nullable
   */
  room?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Day.
   * @nullable
   */
  day?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Sold.
   * @nullable
   */
  sold?: DeserializedType<T, 'Edm.Boolean'> | null;
  constructor(_entityApi: TicketApi<T>);
}
export interface TicketType<T extends DeSerializers = DefaultDeSerializers> {
  ticketNumber: DeserializedType<T, 'Edm.String'>;
  room?: DeserializedType<T, 'Edm.Int32'> | null;
  day?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  sold?: DeserializedType<T, 'Edm.Boolean'> | null;
}
