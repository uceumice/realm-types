import type { Binary, MaxKey, MinKey, Int32, Double, Decimal128, ObjectId, Timestamp } from 'bson';

// json
export type JSONPrimitive = string | number | boolean | null;
export type JSON = JSONPrimitive | JSON[] | { [K in string]: JSON };

// ejson
export type EJSONPrimitive =
  | JSONPrimitive
  | Binary
  | Date
  | MaxKey
  | MinKey
  | Int32
  | Double
  | Decimal128
  | ObjectId
  | RegExp
  | Timestamp;
export type EJSON = EJSONPrimitive | EJSON[] | { [K in string]: EJSON };

export type Document = {
  [K in string]: EJSON;
};
