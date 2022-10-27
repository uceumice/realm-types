import type { MongoClient } from '../../../shared/mongo/client';

export type TemplateDataSources = string[];

/**
 * - [Docs Reference](https://www.mongodb.com/docs/atlas/app-services/functions/context/#connect-to-a-mongodb-data-source-or-third-party-service--context.services-)
 */
export type DataSources<DS extends TemplateDataSources> = {
  get: DS extends string[] ? (name: DS[number]) => MongoClient : undefined;
};
