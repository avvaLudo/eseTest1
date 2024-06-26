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
import type { MovieApi } from './MovieApi';
/**
 * This class represents the entity "Movie" of service "MovieService".
 */
export declare class Movie<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MovieType<T>
{
  /**
   * Technical entity name for Movie.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Movie entity
   */
  static _keys: string[];
  /**
   * Movie Id.
   * Maximum length: 5.
   */
  movieId: DeserializedType<T, 'Edm.String'>;
  /**
   * Title.
   * Maximum length: 100.
   * @nullable
   */
  title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Author.
   * Maximum length: 50.
   * @nullable
   */
  author?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Genre.
   * Maximum length: 40.
   * @nullable
   */
  genre?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Year.
   * @nullable
   */
  year?: DeserializedType<T, 'Edm.Int32'> | null;
  constructor(_entityApi: MovieApi<T>);
}
export interface MovieType<T extends DeSerializers = DefaultDeSerializers> {
  movieId: DeserializedType<T, 'Edm.String'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  author?: DeserializedType<T, 'Edm.String'> | null;
  genre?: DeserializedType<T, 'Edm.String'> | null;
  year?: DeserializedType<T, 'Edm.Int32'> | null;
}
