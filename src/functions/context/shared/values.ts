import type { JSON } from '../../../shared/helpers';

export type TemplateValues = { [K in string]: JSON };

/**
 * - [Docs Reference](https://www.mongodb.com/docs/atlas/app-services/functions/context/#reference-a-value--context.values-)
 */
export type Values<V extends TemplateValues> = {
  get<ValueName extends keyof V>(name: ValueName): V[ValueName];
};
