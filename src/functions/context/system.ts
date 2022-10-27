import { Document } from '../../shared';
import { Context as SharedContext } from './shared';
import { TemplateEnvironment } from './shared/environment';
import { TemplateFunctions } from './shared/functions';
import { TemplateDataSources } from './shared/services';
import { TemplateValues } from './shared/values';

export type Context<
  V extends TemplateValues = TemplateValues,
  F extends TemplateFunctions = TemplateFunctions,
  D extends TemplateDataSources = TemplateDataSources,
  E extends TemplateEnvironment = TemplateEnvironment,
  C extends Document = Document,
  I extends Document = Document,
> = SharedContext<'system', V, F, D, E, C, I>;
