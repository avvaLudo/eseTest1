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
import type { CinemaApi } from './CinemaApi';
/**
 * This class represents the entity "Cinema" of service "MovieService".
 */
export declare class Cinema<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CinemaType<T>
{
  /**
   * Technical entity name for Cinema.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Cinema entity
   */
  static _keys: string[];
  /**
   * Cin Id.
   * Maximum length: 5.
   */
  cinId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 100.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location.
   * Maximum length: 100.
   * @nullable
   */
  location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rooms No.
   * @nullable
   */
  roomsNo?: DeserializedType<T, 'Edm.Int32'> | null;
  constructor(_entityApi: CinemaApi<T>);
}
export interface CinemaType<T extends DeSerializers = DefaultDeSerializers> {
  cinId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  roomsNo?: DeserializedType<T, 'Edm.Int32'> | null;
}
