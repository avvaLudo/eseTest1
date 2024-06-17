/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Ticket } from './Ticket';
import { TicketRequestBuilder } from './TicketRequestBuilder';
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
export class TicketApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Ticket<DeSerializersT>, DeSerializersT>
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
  ): TicketApi<DeSerializersT> {
    return new TicketApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Ticket;

  requestBuilder(): TicketRequestBuilder<DeSerializersT> {
    return new TicketRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Ticket<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Ticket<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Ticket<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Ticket, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Ticket, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TICKET_NUMBER: OrderableEdmTypeField<
      Ticket<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROOM: OrderableEdmTypeField<
      Ticket<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DAY: OrderableEdmTypeField<
      Ticket<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SOLD: OrderableEdmTypeField<
      Ticket<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Ticket<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ticketNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TICKET_NUMBER: fieldBuilder.buildEdmTypeField(
          'TicketNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link room} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOM: fieldBuilder.buildEdmTypeField('Room', 'Edm.Int32', true),
        /**
         * Static representation of the {@link day} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAY: fieldBuilder.buildEdmTypeField('Day', 'Edm.DateTimeOffset', true),
        /**
         * Static representation of the {@link sold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOLD: fieldBuilder.buildEdmTypeField('Sold', 'Edm.Boolean', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Ticket)
      };
    }

    return this._schema;
  }
}
