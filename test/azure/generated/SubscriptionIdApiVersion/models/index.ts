/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing SampleResourceGroup.
 */
export interface SampleResourceGroup {
  /**
   * @member {string} [name] resource group name 'testgroup101'
   */
  name?: string;
  /**
   * @member {string} [location] resource group location 'West US'
   */
  location?: string;
}

/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [code]
   */
  code?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}


/**
 * Contains response data for the getSampleResourceGroup operation.
 */
export type GroupGetSampleResourceGroupResponse = SampleResourceGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SampleResourceGroup;
    };
};
