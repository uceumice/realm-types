import type { Document } from '../../../shared/helpers';
import type { Environment, TemplateEnvironment } from './environment';
import type { Functions, TemplateFunctions } from './functions';
import type { Request } from './request';
import type { DataSources, TemplateDataSources } from './services';
import type { User, UserType } from './user';
import type { TemplateValues, Values } from './values';

/**
 * - [Docs Reference](https://www.mongodb.com/docs/atlas/app-services/functions/context)
 */
export type Context<
  U extends UserType = 'normal',
  V extends TemplateValues = TemplateValues,
  F extends TemplateFunctions = TemplateFunctions,
  D extends TemplateDataSources = TemplateDataSources,
  E extends TemplateEnvironment = TemplateEnvironment,
  C extends Document = Document,
  I extends Document = Document,
> = {
  environment: Environment<E>;
  values: Values<V>;

  functions: Functions<F>;

  services: DataSources<D>;

  user: User<U, C, I>;

  request: Request;

  /**
   * Evaluates to a boolean that is true if the function is running as a system user and false otherwise.
   */
  runningAsSystem(): boolean;
};

export * from './environment';
export * from './functions';
export * from './request';
export * from './services';
export * from './user';
export * from './values';
