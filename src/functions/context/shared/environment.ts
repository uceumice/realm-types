export type TemplateEnvironment = string[];

/**
 * - [Docs Reference](https://www.mongodb.com/docs/atlas/app-services/functions/context/#check-the-app-environment--context.environment-)
 */
export type Environment<T extends TemplateEnvironment> = {
  tag: '' | 'development' | 'testing' | 'qa' | 'production';
  values: { [K in T[number]]: string };
};
