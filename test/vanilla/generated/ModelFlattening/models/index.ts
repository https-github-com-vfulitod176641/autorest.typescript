/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "ms-rest-js";
import * as msRest from "ms-rest-js";


/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
  /**
   * @member {ErrorModel} [parentError]
   */
  parentError?: ErrorModel;
}

/**
 * @interface
 * An interface representing Resource.
 */
export interface Resource {
  /**
   * @member {string} [id] Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [type] Resource Type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags]
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {string} [location] Resource Location
   */
  location?: string;
  /**
   * @member {string} [name] Resource Name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
}

/**
 * @interface
 * An interface representing FlattenedProduct.
 * Flattened product.
 *
 * @extends Resource
 */
export interface FlattenedProduct extends Resource {
  /**
   * @member {string} [pname]
   */
  pname?: string;
  /**
   * @member {string} [flattenedProductType]
   */
  flattenedProductType?: string;
  /**
   * @member {ProvisioningStateValues} [provisioningStateValues] Possible
   * values include: 'Succeeded', 'Failed', 'canceled', 'Accepted', 'Creating',
   * 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningStateValues?: ProvisioningStateValues;
  /**
   * @member {string} [provisioningState]
   */
  provisioningState?: string;
}

/**
 * @interface
 * An interface representing ResourceCollection.
 */
export interface ResourceCollection {
  /**
   * @member {FlattenedProduct} [productresource]
   */
  productresource?: FlattenedProduct;
  /**
   * @member {FlattenedProduct[]} [arrayofresources]
   */
  arrayofresources?: FlattenedProduct[];
  /**
   * @member {{ [propertyName: string]: FlattenedProduct }}
   * [dictionaryofresources]
   */
  dictionaryofresources?: { [propertyName: string]: FlattenedProduct };
}

/**
 * @interface
 * An interface representing BaseProduct.
 * The product documentation.
 *
 */
export interface BaseProduct {
  /**
   * @member {string} productId Unique identifier representing a specific
   * product for a given latitude & longitude. For example, uberX in San
   * Francisco will have a different product_id than uberX in Los Angeles.
   */
  productId: string;
  /**
   * @member {string} [description] Description of product.
   */
  description?: string;
}

/**
 * @interface
 * An interface representing SimpleProduct.
 * The product documentation.
 *
 * @extends BaseProduct
 */
export interface SimpleProduct extends BaseProduct {
  /**
   * @member {string} maxProductDisplayName Display name of product.
   */
  maxProductDisplayName: string;
  /**
   * @member {string} [genericValue] Generic URL value.
   */
  genericValue?: string;
  /**
   * @member {string} [odatavalue] URL value.
   */
  odatavalue?: string;
}

/**
 * @interface
 * An interface representing GenericUrl.
 * The Generic URL.
 *
 */
export interface GenericUrl {
  /**
   * @member {string} [genericValue] Generic URL value.
   */
  genericValue?: string;
}

/**
 * @interface
 * An interface representing WrappedProduct.
 * The wrapped produc.
 *
 */
export interface WrappedProduct {
  /**
   * @member {string} [value] the product value
   */
  value?: string;
}

/**
 * @interface
 * An interface representing ProductWrapper.
 * The wrapped produc.
 *
 */
export interface ProductWrapper {
  /**
   * @member {string} [value] the product value
   */
  value?: string;
}

/**
 * @interface
 * An interface representing FlattenParameterGroup.
 * Additional parameters for putSimpleProductWithGrouping operation.
 *
 */
export interface FlattenParameterGroup {
  /**
   * @member {string} name Product name with value 'groupproduct'
   */
  name: string;
  /**
   * @member {string} productId Unique identifier representing a specific
   * product for a given latitude & longitude. For example, uberX in San
   * Francisco will have a different product_id than uberX in Los Angeles.
   */
  productId: string;
  /**
   * @member {string} [description] Description of product.
   */
  description?: string;
  /**
   * @member {string} maxProductDisplayName Display name of product.
   */
  maxProductDisplayName: string;
  /**
   * @member {string} [genericValue] Generic URL value.
   */
  genericValue?: string;
  /**
   * @member {string} [odatavalue] URL value.
   */
  odatavalue?: string;
}

/**
 * @interface
 * An interface representing AutoRestResourceFlatteningTestServiceOptions.
 * @extends ServiceClientOptions
 */
export interface AutoRestResourceFlatteningTestServiceOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing AutoRestResourceFlatteningTestServicePutArrayOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AutoRestResourceFlatteningTestServicePutArrayOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {Resource[]} [resourceArray] External Resource as an Array to put
   */
  resourceArray?: Resource[];
}

/**
 * @interface
 * An interface representing AutoRestResourceFlatteningTestServicePutWrappedArrayOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AutoRestResourceFlatteningTestServicePutWrappedArrayOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {WrappedProduct[]} [resourceArray] External Resource as an Array
   * to put
   */
  resourceArray?: WrappedProduct[];
}

/**
 * @interface
 * An interface representing AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {{ [propertyName: string]: FlattenedProduct }}
   * [resourceDictionary] External Resource as a Dictionary to put
   */
  resourceDictionary?: { [propertyName: string]: FlattenedProduct };
}

/**
 * @interface
 * An interface representing AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {ResourceCollection} [resourceComplexObject] External Resource as
   * a ResourceCollection to put
   */
  resourceComplexObject?: ResourceCollection;
}

/**
 * @interface
 * An interface representing AutoRestResourceFlatteningTestServicePutSimpleProductOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AutoRestResourceFlatteningTestServicePutSimpleProductOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SimpleProduct} [simpleBodyProduct] Simple body product to put
   */
  simpleBodyProduct?: SimpleProduct;
}

/**
 * @interface
 * An interface representing AutoRestResourceFlatteningTestServicePostFlattenedSimpleProductOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AutoRestResourceFlatteningTestServicePostFlattenedSimpleProductOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [description] Description of product.
   */
  description?: string;
  /**
   * @member {string} [genericValue] Generic URL value.
   */
  genericValue?: string;
  /**
   * @member {string} [odatavalue] URL value.
   */
  odatavalue?: string;
}

/**
 * Defines values for ProvisioningStateValues.
 * Possible values include: 'Succeeded', 'Failed', 'canceled', 'Accepted',
 * 'Creating', 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ProvisioningStateValues =
 * <ProvisioningStateValues>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ProvisioningStateValues {
  Succeeded = 'Succeeded',
  Failed = 'Failed',
  Canceled = 'canceled',
  Accepted = 'Accepted',
  Creating = 'Creating',
  Created = 'Created',
  Updating = 'Updating',
  Updated = 'Updated',
  Deleting = 'Deleting',
  Deleted = 'Deleted',
  OK = 'OK',
}

/**
 * Contains response data for the getArray operation.
 */
export type GetArrayResponse = Array<FlattenedProduct> & {
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
      parsedBody: FlattenedProduct[];
    };
};

/**
 * Contains response data for the getWrappedArray operation.
 */
export type GetWrappedArrayResponse = Array<ProductWrapper> & {
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
      parsedBody: ProductWrapper[];
    };
};

/**
 * Contains response data for the getDictionary operation.
 */
export type GetDictionaryResponse = {
  /**
   * The response body properties.
   */
  [propertyName: string]: FlattenedProduct;
} & {
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
      parsedBody: { [propertyName: string]: FlattenedProduct };
    };
};

/**
 * Contains response data for the getResourceCollection operation.
 */
export type GetResourceCollectionResponse = ResourceCollection & {
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
      parsedBody: ResourceCollection;
    };
};

/**
 * Contains response data for the putSimpleProduct operation.
 */
export type PutSimpleProductResponse = SimpleProduct & {
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
      parsedBody: SimpleProduct;
    };
};

/**
 * Contains response data for the postFlattenedSimpleProduct operation.
 */
export type PostFlattenedSimpleProductResponse = SimpleProduct & {
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
      parsedBody: SimpleProduct;
    };
};

/**
 * Contains response data for the putSimpleProductWithGrouping operation.
 */
export type PutSimpleProductWithGroupingResponse = SimpleProduct & {
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
      parsedBody: SimpleProduct;
    };
};
