import type { EJSON } from '../shared/helpers';

/**
 * @limits
 * Incoming requests are limited to a maximum size of 18 MB.
 * This limit applies to the total size of all arguments passed
 * to the function as well as any request headers or payload if
 * the function is called through an HTTPS endpoint.
 *
 * @returns
 * Functions automatically serialize returned values to Extended JSON.
 *
 * - [Docs Reference](https://www.mongodb.com/docs/atlas/app-services/functions)
 */
export type RealmFunction<Args extends EJSON[] | EJSON, Rtrn extends EJSON | void | Promise<EJSON | void>> = (
  ...args: Args extends unknown[] ? Args : [Args]
) => Rtrn;

export { Context } from './context/shared';
export { Context as NormalContext } from './context/normal';
export { Context as ServerContext } from './context/server';
export { Context as SystemContext } from './context/system';
