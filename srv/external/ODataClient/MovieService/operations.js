"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operations = exports.add = exports.sum = exports.getIncident = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * Get Incident.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function getIncident(parameters, deSerializers = odata_v4_1.defaultDeSerializers) {
    const params = {};
    return new odata_v4_1.OperationRequestBuilder('/odata/v4/movie', 'getIncident', data => (0, odata_v4_1.transformReturnValueForEdmTypeList)(data, val => (0, odata_v4_1.edmToTs)(val, 'Edm.String', deSerializers)), params, deSerializers, 'function');
}
exports.getIncident = getIncident;
/**
 * Sum.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sum(parameters, deSerializers = odata_v4_1.defaultDeSerializers) {
    const params = {};
    return new odata_v4_1.OperationRequestBuilder('/odata/v4/movie', 'sum', data => (0, odata_v4_1.transformReturnValueForEdmType)(data, val => (0, odata_v4_1.edmToTs)(val.value, 'Edm.Int32', deSerializers)), params, deSerializers, 'function');
}
exports.sum = sum;
/**
 * Add.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function add(parameters, deSerializers = odata_v4_1.defaultDeSerializers) {
    const params = {
        x: new odata_v4_1.OperationParameter('x', 'Edm.Int32', parameters.x),
        y: new odata_v4_1.OperationParameter('y', 'Edm.Int32', parameters.y)
    };
    return new odata_v4_1.OperationRequestBuilder('/odata/v4/movie', 'add', data => (0, odata_v4_1.transformReturnValueForEdmType)(data, val => (0, odata_v4_1.edmToTs)(val.value, 'Edm.Int32', deSerializers)), params, deSerializers, 'action');
}
exports.add = add;
exports.operations = {
    getIncident,
    sum,
    add
};
//# sourceMappingURL=operations.js.map