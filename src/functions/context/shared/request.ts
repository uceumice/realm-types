/**
 * - [Docs Reference](https://www.mongodb.com/docs/atlas/app-services/functions/context/#get-request-metadata--context.request-)
 */
export type Request = {
  /**
   * The IP address of the client that issued the Function request.
   */
  remoteIPAddress: string;
  /**
   * An object where each field maps to a type of HTTP Header that was
   * included in the request that caused the function to execute. The
   * value of each field is an array of strings where each string maps
   * to a header of the specified type that was included in the request.
   *
   * @example
   * ```ts
   * {
   *  "requestHeaders": {
   *     "Content-Type": ["application/json"],
   *     "Cookie": [
   *     "someCookie=someValue",
   *     "anotherCookie=anotherValue"
   *     ]
   *   }
   * }
   * ```
   */
  requestHeaders: { [K in string]: string[] };
  /**
   * The query string attached to the incoming HTTP request.
   * All query parameters appear in the same order as they were specified.
   *
   * @important App Services Removes The Secret Parameter
   *
   * For security reasons, Atlas App Services automatically removes any
   * query string key/value pair where the key is secret. For example,
   * if an incoming request has the query string ?secret=hello&someParam=42
   * then the rawQueryString for that request is "someParam=42".
   *
   */
  rawQueryString: string;
  /**
   * The URL of the page from which the request was sent. This value
   * is derived from the HTTP Referer header. If the request did not
   * include a Referer header then this is undefined.
   *
   * @optional
   */
  httpReferrer?: string;
  /**
   * Characteristic information that identifies the source of the request,
   * such as the software vendor, operating system, or application type.
   * This value is derived from the HTTP User-Agent header, If the request
   * did not include a User-Agent header then this is undefined.
   *
   * @optional
   */
  httpUserAgent?: string;

  // TODO #1 reverse engineer "service" property of RealmFunctionContextRequest
  service: string;
  // TODO #2 reverse engineer "action" property of RealmFunctionContextRequest
  action: string;
};
