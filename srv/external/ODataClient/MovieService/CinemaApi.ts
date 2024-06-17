/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Cinema } from './Cinema';
import { CinemaRequestBuilder } from './CinemaRequestBuilder';
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
export class CinemaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Cinema<DeSerializersT>, DeSerializersT>
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
  ): CinemaApi<DeSerializersT> {
    return new CinemaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Cinema;

  requestBuilder(): CinemaRequestBuilder<DeSerializersT> {
    return new CinemaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Cinema<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Cinema<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Cinema<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Cinema, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Cinema, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CIN_ID: OrderableEdmTypeField<
      Cinema<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Cinema<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      Cinema<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROOMS_NO: OrderableEdmTypeField<
      Cinema<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Cinema<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link cinId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIN_ID: fieldBuilder.buildEdmTypeField('CinID', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roomsNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOMS_NO: fieldBuilder.buildEdmTypeField('RoomsNo', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Cinema)
      };
    }

    return this._schema;
  }
}
