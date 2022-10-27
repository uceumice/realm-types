export type TemplateFunctions = { [K in string]: { args: any[]; returns: unknown } };

/**
 * - [Docs Reference](https://www.mongodb.com/docs/atlas/app-services/functions/context/#call-a-function--context.functions-)
 */
export type Functions<T extends TemplateFunctions> = {
  execute: <Name extends keyof T>(name: Name, ...args: T[Name]['args']) => Promise<T[Name]['returns']>;
};
