/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AdditionalPropertiesClientContext } from "./additionalPropertiesClientContext";

class AdditionalPropertiesClient extends AdditionalPropertiesClientContext {
  // Operation groups
  pets: operations.Pets;

  /**
   * @class
   * Initializes a new instance of the AdditionalPropertiesClient class.
   * @constructor
   *
   * @param {string} [baseUri] The base URI of the service.
   *
   * @param {object} [options] The parameter options
   */
  constructor(baseUri?: string, options?: msRest.ServiceClientOptions) {
    super(baseUri, options);
    this.pets = new operations.Pets(this);
  }
}

// Operation Specifications

export {
  AdditionalPropertiesClient,
  AdditionalPropertiesClientContext,
  Models as AdditionalPropertiesModels,
  Mappers as AdditionalPropertiesMappers
};
export * from "./operations";
