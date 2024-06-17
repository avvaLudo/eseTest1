/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Movie } from './Movie';
import { MovieRequestBuilder } from './MovieRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class MovieApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Movie<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): MovieApi<DeSerializersT> {
    return new MovieApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Movie;

  requestBuilder(): MovieRequestBuilder<DeSerializersT> {
    return new MovieRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Movie<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Movie<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Movie<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Movie, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Movie, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MOVIE_ID: OrderableEdmTypeField<
      Movie<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      Movie<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHOR: OrderableEdmTypeField<
      Movie<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENRE: OrderableEdmTypeField<
      Movie<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YEAR: OrderableEdmTypeField<
      Movie<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Movie<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link movieId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOVIE_ID: fieldBuilder.buildEdmTypeField(
          'MovieID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
        /**
         * Static representation of the {@link author} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHOR: fieldBuilder.buildEdmTypeField('author', 'Edm.String', true),
        /**
         * Static representation of the {@link genre} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENRE: fieldBuilder.buildEdmTypeField('genre', 'Edm.String', true),
        /**
         * Static representation of the {@link year} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR: fieldBuilder.buildEdmTypeField('year', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Movie)
      };
    }

    return this._schema;
  }
}
