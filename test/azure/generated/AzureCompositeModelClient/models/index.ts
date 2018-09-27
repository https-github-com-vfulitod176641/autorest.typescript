/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing Product.
 * The product documentation.
 *
 */
export interface Product {
  /**
   * @member {string} [productId] Unique identifier representing a specific
   * product for a given latitude & longitude. For example, uberX in San
   * Francisco will have a different product_id than uberX in Los Angeles.
   */
  productId?: string;
  /**
   * @member {string} [description] Description of product.
   */
  description?: string;
  /**
   * @member {string} [displayName] Display name of product.
   */
  displayName?: string;
  /**
   * @member {string} [capacity] Capacity of product. For example, 4 people.
   * Default value: '100' .
   */
  capacity?: string;
  /**
   * @member {string} [image] Image URL representing the product.
   */
  image?: string;
}

/**
 * @interface
 * An interface representing CatalogDictionary.
 */
export interface CatalogDictionary {
  /**
   * @member {{ [propertyName: string]: Product }} [productDictionary]
   * Dictionary of products
   */
  productDictionary?: { [propertyName: string]: Product };
}

/**
 * @interface
 * An interface representing CatalogArray.
 */
export interface CatalogArray {
  /**
   * @member {Product[]} [productArray] Array of products
   */
  productArray?: Product[];
}

/**
 * @interface
 * An interface representing CatalogArrayOfDictionary.
 */
export interface CatalogArrayOfDictionary {
  /**
   * @member {{ [propertyName: string]: Product }[]} [productArrayOfDictionary]
   * Array of dictionary of products
   */
  productArrayOfDictionary?: { [propertyName: string]: Product }[];
}

/**
 * @interface
 * An interface representing CatalogDictionaryOfArray.
 */
export interface CatalogDictionaryOfArray {
  /**
   * @member {{ [propertyName: string]: Product[] }} [productDictionaryOfArray]
   * Dictionary of Array of product
   */
  productDictionaryOfArray?: { [propertyName: string]: Product[] };
}

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
}

/**
 * @interface
 * An interface representing Basic.
 */
export interface Basic {
  /**
   * @member {number} [id] Basic Id
   */
  id?: number;
  /**
   * @member {string} [name] Name property with a very long description that
   * does not fit on a single line and a line break.
   */
  name?: string;
  /**
   * @member {CMYKColors} [color] Possible values include: 'cyan', 'Magenta',
   * 'YELLOW', 'blacK'
   */
  color?: CMYKColors;
}

/**
 * @interface
 * An interface representing Pet.
 */
export interface Pet {
  /**
   * @member {number} [id]
   */
  id?: number;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing Dog.
 * @extends Pet
 */
export interface Dog extends Pet {
  /**
   * @member {string} [food]
   */
  food?: string;
}

/**
 * @interface
 * An interface representing Cat.
 * @extends Pet
 */
export interface Cat extends Pet {
  /**
   * @member {string} [color]
   */
  color?: string;
  /**
   * @member {Dog[]} [hates]
   */
  hates?: Dog[];
}

/**
 * @interface
 * An interface representing Siamese.
 * @extends Cat
 */
export interface Siamese extends Cat {
  /**
   * @member {string} [breed]
   */
  breed?: string;
}

/**
 * Contains the possible cases for Fish.
 */
export type FishUnion = Fish | SalmonUnion | SharkUnion;

/**
 * @interface
 * An interface representing Fish.
 */
export interface Fish {
  /**
   * @member {string} fishtype Polymorphic Discriminator
   */
  fishtype: "Fish";
  /**
   * @member {string} [species]
   */
  species?: string;
  /**
   * @member {number} length
   */
  length: number;
  /**
   * @member {FishUnion[]} [siblings]
   */
  siblings?: FishUnion[];
}

/**
 * Contains the possible cases for Salmon.
 */
export type SalmonUnion = Salmon | SmartSalmon;

/**
 * @interface
 * An interface representing Salmon.
 */
export interface Salmon {
  /**
   * @member {string} fishtype Polymorphic Discriminator
   */
  fishtype: "salmon";
  /**
   * @member {string} [species]
   */
  species?: string;
  /**
   * @member {number} length
   */
  length: number;
  /**
   * @member {FishUnion[]} [siblings]
   */
  siblings?: FishUnion[];
  /**
   * @member {string} [location]
   */
  location?: string;
  /**
   * @member {boolean} [iswild]
   */
  iswild?: boolean;
}

/**
 * @interface
 * An interface representing SmartSalmon.
 */
export interface SmartSalmon {
  /**
   * @member {string} fishtype Polymorphic Discriminator
   */
  fishtype: "smart_salmon";
  /**
   * @member {string} [species]
   */
  species?: string;
  /**
   * @member {number} length
   */
  length: number;
  /**
   * @member {FishUnion[]} [siblings]
   */
  siblings?: FishUnion[];
  /**
   * @member {string} [location]
   */
  location?: string;
  /**
   * @member {boolean} [iswild]
   */
  iswild?: boolean;
  /**
   * @member {string} [collegeDegree]
   */
  collegeDegree?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * Contains the possible cases for Shark.
 */
export type SharkUnion = Shark | Sawshark | Goblinshark | Cookiecuttershark;

/**
 * @interface
 * An interface representing Shark.
 */
export interface Shark {
  /**
   * @member {string} fishtype Polymorphic Discriminator
   */
  fishtype: "shark";
  /**
   * @member {string} [species]
   */
  species?: string;
  /**
   * @member {number} length
   */
  length: number;
  /**
   * @member {FishUnion[]} [siblings]
   */
  siblings?: FishUnion[];
  /**
   * @member {number} [age]
   */
  age?: number;
  /**
   * @member {Date} birthday
   */
  birthday: Date;
}

/**
 * @interface
 * An interface representing Sawshark.
 */
export interface Sawshark {
  /**
   * @member {string} fishtype Polymorphic Discriminator
   */
  fishtype: "sawshark";
  /**
   * @member {string} [species]
   */
  species?: string;
  /**
   * @member {number} length
   */
  length: number;
  /**
   * @member {FishUnion[]} [siblings]
   */
  siblings?: FishUnion[];
  /**
   * @member {number} [age]
   */
  age?: number;
  /**
   * @member {Date} birthday
   */
  birthday: Date;
  /**
   * @member {Uint8Array} [picture]
   */
  picture?: Uint8Array;
}

/**
 * @interface
 * An interface representing Goblinshark.
 */
export interface Goblinshark {
  /**
   * @member {string} fishtype Polymorphic Discriminator
   */
  fishtype: "goblin";
  /**
   * @member {string} [species]
   */
  species?: string;
  /**
   * @member {number} length
   */
  length: number;
  /**
   * @member {FishUnion[]} [siblings]
   */
  siblings?: FishUnion[];
  /**
   * @member {number} [age]
   */
  age?: number;
  /**
   * @member {Date} birthday
   */
  birthday: Date;
  /**
   * @member {number} [jawsize]
   */
  jawsize?: number;
  /**
   * @member {GoblinSharkColor} [color] Colors possible. Possible values
   * include: 'pink', 'gray', 'brown'. Default value: 'gray' .
   */
  color?: GoblinSharkColor;
}

/**
 * @interface
 * An interface representing Cookiecuttershark.
 */
export interface Cookiecuttershark {
  /**
   * @member {string} fishtype Polymorphic Discriminator
   */
  fishtype: "cookiecuttershark";
  /**
   * @member {string} [species]
   */
  species?: string;
  /**
   * @member {number} length
   */
  length: number;
  /**
   * @member {FishUnion[]} [siblings]
   */
  siblings?: FishUnion[];
  /**
   * @member {number} [age]
   */
  age?: number;
  /**
   * @member {Date} birthday
   */
  birthday: Date;
}

/**
 * @interface
 * An interface representing IntWrapper.
 */
export interface IntWrapper {
  /**
   * @member {number} [field1]
   */
  field1?: number;
  /**
   * @member {number} [field2]
   */
  field2?: number;
}

/**
 * @interface
 * An interface representing LongWrapper.
 */
export interface LongWrapper {
  /**
   * @member {number} [field1]
   */
  field1?: number;
  /**
   * @member {number} [field2]
   */
  field2?: number;
}

/**
 * @interface
 * An interface representing FloatWrapper.
 */
export interface FloatWrapper {
  /**
   * @member {number} [field1]
   */
  field1?: number;
  /**
   * @member {number} [field2]
   */
  field2?: number;
}

/**
 * @interface
 * An interface representing DoubleWrapper.
 */
export interface DoubleWrapper {
  /**
   * @member {number} [field1]
   */
  field1?: number;
  /**
   * @member {number}
   * [field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose]
   */
  field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose?: number;
}

/**
 * @interface
 * An interface representing BooleanWrapper.
 */
export interface BooleanWrapper {
  /**
   * @member {boolean} [fieldTrue]
   */
  fieldTrue?: boolean;
  /**
   * @member {boolean} [fieldFalse]
   */
  fieldFalse?: boolean;
}

/**
 * @interface
 * An interface representing StringWrapper.
 */
export interface StringWrapper {
  /**
   * @member {string} [field]
   */
  field?: string;
  /**
   * @member {string} [empty]
   */
  empty?: string;
  /**
   * @member {string} [nullProperty]
   */
  nullProperty?: string;
}

/**
 * @interface
 * An interface representing DateWrapper.
 */
export interface DateWrapper {
  /**
   * @member {Date} [field]
   */
  field?: Date;
  /**
   * @member {Date} [leap]
   */
  leap?: Date;
}

/**
 * @interface
 * An interface representing DatetimeWrapper.
 */
export interface DatetimeWrapper {
  /**
   * @member {Date} [field]
   */
  field?: Date;
  /**
   * @member {Date} [now]
   */
  now?: Date;
}

/**
 * @interface
 * An interface representing Datetimerfc1123Wrapper.
 */
export interface Datetimerfc1123Wrapper {
  /**
   * @member {Date} [field]
   */
  field?: Date;
  /**
   * @member {Date} [now]
   */
  now?: Date;
}

/**
 * @interface
 * An interface representing DurationWrapper.
 */
export interface DurationWrapper {
  /**
   * @member {string} [field]
   */
  field?: string;
}

/**
 * @interface
 * An interface representing ByteWrapper.
 */
export interface ByteWrapper {
  /**
   * @member {Uint8Array} [field]
   */
  field?: Uint8Array;
}

/**
 * @interface
 * An interface representing ArrayWrapper.
 */
export interface ArrayWrapper {
  /**
   * @member {string[]} [arrayProperty]
   */
  arrayProperty?: string[];
}

/**
 * @interface
 * An interface representing DictionaryWrapper.
 */
export interface DictionaryWrapper {
  /**
   * @member {{ [propertyName: string]: string }} [defaultProgram]
   */
  defaultProgram?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ReadonlyObj.
 */
export interface ReadonlyObj {
  /**
   * @member {string} [id] **NOTE: This property will not be serialized. It can
   * only be populated by the server.**
   */
  readonly id?: string;
  /**
   * @member {number} [size]
   */
  size?: number;
}

/**
 * Contains the possible cases for MyBaseType.
 */
export type MyBaseTypeUnion = MyBaseType | MyDerivedType;

/**
 * @interface
 * An interface representing MyBaseType.
 */
export interface MyBaseType {
  /**
   * @member {string} kind Polymorphic Discriminator
   */
  kind: "MyBaseType";
  /**
   * @member {string} [propB1]
   */
  propB1?: string;
  /**
   * @member {string} [propBH1]
   */
  propBH1?: string;
}

/**
 * @interface
 * An interface representing MyDerivedType.
 */
export interface MyDerivedType {
  /**
   * @member {string} kind Polymorphic Discriminator
   */
  kind: "Kind1";
  /**
   * @member {string} [propB1]
   */
  propB1?: string;
  /**
   * @member {string} [propBH1]
   */
  propBH1?: string;
  /**
   * @member {string} [propD1]
   */
  propD1?: string;
}

/**
 * @interface
 * An interface representing AzureCompositeModelCreateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AzureCompositeModelCreateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {{ [propertyName: string]: Product[] }} [productDictionaryOfArray]
   * Dictionary of Array of product
   */
  productDictionaryOfArray?: { [propertyName: string]: Product[] };
}

/**
 * @interface
 * An interface representing AzureCompositeModelUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AzureCompositeModelUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {{ [propertyName: string]: Product }[]} [productArrayOfDictionary]
   * Array of dictionary of products
   */
  productArrayOfDictionary?: { [propertyName: string]: Product }[];
}

/**
 * @interface
 * An interface representing PrimitivePutDurationOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PrimitivePutDurationOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [field]
   */
  field?: string;
}

/**
 * @interface
 * An interface representing PrimitivePutByteOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PrimitivePutByteOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {Uint8Array} [field]
   */
  field?: Uint8Array;
}

/**
 * @interface
 * An interface representing ArrayModelPutValidOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ArrayModelPutValidOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string[]} [arrayProperty]
   */
  arrayProperty?: string[];
}

/**
 * @interface
 * An interface representing ArrayModelPutEmptyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ArrayModelPutEmptyOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string[]} [arrayProperty]
   */
  arrayProperty?: string[];
}

/**
 * @interface
 * An interface representing DictionaryPutValidOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DictionaryPutValidOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {{ [propertyName: string]: string }} [defaultProgram]
   */
  defaultProgram?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing DictionaryPutEmptyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DictionaryPutEmptyOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {{ [propertyName: string]: string }} [defaultProgram]
   */
  defaultProgram?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ReadonlypropertyPutValidOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ReadonlypropertyPutValidOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {number} [size]
   */
  size?: number;
}

/**
 * @interface
 * An interface representing AzureCompositeModelOptions.
 * @extends AzureServiceClientOptions
 */
export interface AzureCompositeModelOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * Defines values for CMYKColors.
 * Possible values include: 'cyan', 'Magenta', 'YELLOW', 'blacK'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: CMYKColors = <CMYKColors>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum CMYKColors {
  Cyan = 'cyan',
  Magenta = 'Magenta',
  YELLOW = 'YELLOW',
  BlacK = 'blacK',
}

/**
 * Defines values for GoblinSharkColor.
 * Possible values include: 'pink', 'gray', 'brown'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: GoblinSharkColor =
 * <GoblinSharkColor>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum GoblinSharkColor {
  Pink = 'pink',
  Gray = 'gray',
  Brown = 'brown',
}

/**
 * Defines values for MyKind.
 * Possible values include: 'Kind1'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: MyKind = <MyKind>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum MyKind {
  Kind1 = 'Kind1',
}

/**
 * Contains response data for the list operation.
 */
export type ListResponse = CatalogArray & {
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
      parsedBody: CatalogArray;
    };
};

/**
 * Contains response data for the create operation.
 */
export type CreateResponse = CatalogDictionary & {
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
      parsedBody: CatalogDictionary;
    };
};

/**
 * Contains response data for the update operation.
 */
export type UpdateResponse = CatalogArray & {
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
      parsedBody: CatalogArray;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type BasicGetValidResponse = Basic & {
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
      parsedBody: Basic;
    };
};

/**
 * Contains response data for the getInvalid operation.
 */
export type BasicGetInvalidResponse = Basic & {
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
      parsedBody: Basic;
    };
};

/**
 * Contains response data for the getEmpty operation.
 */
export type BasicGetEmptyResponse = Basic & {
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
      parsedBody: Basic;
    };
};

/**
 * Contains response data for the getNull operation.
 */
export type BasicGetNullResponse = Basic & {
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
      parsedBody: Basic;
    };
};

/**
 * Contains response data for the getNotProvided operation.
 */
export type BasicGetNotProvidedResponse = Basic & {
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
      parsedBody: Basic;
    };
};

/**
 * Contains response data for the getInt operation.
 */
export type PrimitiveGetIntResponse = IntWrapper & {
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
      parsedBody: IntWrapper;
    };
};

/**
 * Contains response data for the getLong operation.
 */
export type PrimitiveGetLongResponse = LongWrapper & {
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
      parsedBody: LongWrapper;
    };
};

/**
 * Contains response data for the getFloat operation.
 */
export type PrimitiveGetFloatResponse = FloatWrapper & {
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
      parsedBody: FloatWrapper;
    };
};

/**
 * Contains response data for the getDouble operation.
 */
export type PrimitiveGetDoubleResponse = DoubleWrapper & {
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
      parsedBody: DoubleWrapper;
    };
};

/**
 * Contains response data for the getBool operation.
 */
export type PrimitiveGetBoolResponse = BooleanWrapper & {
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
      parsedBody: BooleanWrapper;
    };
};

/**
 * Contains response data for the getString operation.
 */
export type PrimitiveGetStringResponse = StringWrapper & {
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
      parsedBody: StringWrapper;
    };
};

/**
 * Contains response data for the getDate operation.
 */
export type PrimitiveGetDateResponse = DateWrapper & {
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
      parsedBody: DateWrapper;
    };
};

/**
 * Contains response data for the getDateTime operation.
 */
export type PrimitiveGetDateTimeResponse = DatetimeWrapper & {
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
      parsedBody: DatetimeWrapper;
    };
};

/**
 * Contains response data for the getDateTimeRfc1123 operation.
 */
export type PrimitiveGetDateTimeRfc1123Response = Datetimerfc1123Wrapper & {
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
      parsedBody: Datetimerfc1123Wrapper;
    };
};

/**
 * Contains response data for the getDuration operation.
 */
export type PrimitiveGetDurationResponse = DurationWrapper & {
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
      parsedBody: DurationWrapper;
    };
};

/**
 * Contains response data for the getByte operation.
 */
export type PrimitiveGetByteResponse = ByteWrapper & {
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
      parsedBody: ByteWrapper;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type ArrayModelGetValidResponse = ArrayWrapper & {
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
      parsedBody: ArrayWrapper;
    };
};

/**
 * Contains response data for the getEmpty operation.
 */
export type ArrayModelGetEmptyResponse = ArrayWrapper & {
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
      parsedBody: ArrayWrapper;
    };
};

/**
 * Contains response data for the getNotProvided operation.
 */
export type ArrayModelGetNotProvidedResponse = ArrayWrapper & {
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
      parsedBody: ArrayWrapper;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type DictionaryGetValidResponse = DictionaryWrapper & {
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
      parsedBody: DictionaryWrapper;
    };
};

/**
 * Contains response data for the getEmpty operation.
 */
export type DictionaryGetEmptyResponse = DictionaryWrapper & {
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
      parsedBody: DictionaryWrapper;
    };
};

/**
 * Contains response data for the getNull operation.
 */
export type DictionaryGetNullResponse = DictionaryWrapper & {
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
      parsedBody: DictionaryWrapper;
    };
};

/**
 * Contains response data for the getNotProvided operation.
 */
export type DictionaryGetNotProvidedResponse = DictionaryWrapper & {
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
      parsedBody: DictionaryWrapper;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type InheritanceGetValidResponse = Siamese & {
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
      parsedBody: Siamese;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type PolymorphismGetValidResponse = FishUnion & {
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
      parsedBody: FishUnion;
    };
};

/**
 * Contains response data for the getComplicated operation.
 */
export type PolymorphismGetComplicatedResponse = SalmonUnion & {
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
      parsedBody: SalmonUnion;
    };
};

/**
 * Contains response data for the putMissingDiscriminator operation.
 */
export type PolymorphismPutMissingDiscriminatorResponse = SalmonUnion & {
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
      parsedBody: SalmonUnion;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type PolymorphicrecursiveGetValidResponse = FishUnion & {
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
      parsedBody: FishUnion;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type ReadonlypropertyGetValidResponse = ReadonlyObj & {
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
      parsedBody: ReadonlyObj;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type FlattencomplexGetValidResponse = MyBaseTypeUnion & {
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
      parsedBody: MyBaseTypeUnion;
    };
};
