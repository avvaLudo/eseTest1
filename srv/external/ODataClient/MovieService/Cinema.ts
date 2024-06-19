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
export class Cinema<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CinemaType<T>
{
  /**
   * Technical entity name for Cinema.
   */
  static _entityName = 'Cinema';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/odata/v4/movie';
  /**
   * All key fields of the Cinema entity
   */
  static _keys = ['CinID'];
  /**
   * Cin Id.
   * Maximum length: 5.
   */
  declare cinId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 100.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location.
   * Maximum length: 100.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rooms No.
   * @nullable
   */
  declare roomsNo?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(_entityApi: CinemaApi<T>) {
    super(_entityApi);
  }
}

export interface CinemaType<T extends DeSerializers = DefaultDeSerializers> {
  cinId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  roomsNo?: DeserializedType<T, 'Edm.Int32'> | null;
}
