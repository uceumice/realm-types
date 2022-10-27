import type { Document } from '../../../../shared/helpers';
import type { Identity } from './identity';

/**
 * The type of the user. The following types are possible:
 *
 * @note
 *
 * Type:          Description:
 * "normal"       The user is an application user logged in through an authentication provider other than the API Key provider.
 * "server"       The user is a server process logged in with any type of App Services API Key.
 * "system"       The user is the system user that bypasses all rules.
 *
 */
export type UserType = 'normal' | 'server' | 'system';

/**
 * - [Docs Reference](https://www.mongodb.com/docs/atlas/app-services/functions/context/#get-user-data--context.user-)
 */
export type User<Type extends UserType, CustomData extends Document, IdentityData extends Document> = {
  /**
   * A string representation of the ObjectId that uniquely identifies the user.
   */
  id: Type extends 'system' ? undefined : string;
  /**
   * The type of the user. The following types are possible:
   *
   * @note
   *
   * Type:          Description:
   * "normal"       The user is an application user logged in through an authentication provider other than the API Key provider.
   * "server"       The user is a server process logged in with any type of App Services API Key.
   * "system"       The user is the system user that bypasses all rules.
   *
   */
  type: Type;
  /**
   * A document that contains metadata that describes the user. This field
   * combines the data for all identities associated with the user, so the
   * exact field names and values depend on which authentication providers
   * the user has authenticated with.
   *
   * @note
   *
   * System Functions Have No User Data. In system functions, the user.data
   * object is empty. Use context.runningAsSystem() to test if the function
   * is running as a system user.
   */
  data: Type extends 'system' ? undefined : IdentityData;
  /**
   * A document from your application's custom user data collection that specifies
   * the user's ID. You can use the custom user data collection to store arbitrary
   * data about your application's users. If you set the name field, App Services
   * populates the username metadata field with the return value of name. App Services
   * automatically fetches a new copy of the data whenever a user refreshes their
   * access token, such as when they log in. The underlying data is a regular MongoDB
   * document, so you can use standard CRUD operations through the MongoDB Atlas
   * service to define and modify the user's custom data.
   *
   * @note
   *
   * Avoid Storing Large Custom User Data. Custom user data is limited to 16MB, the
   * maximum size of a MongoDB document. To avoid hitting this limit, consider storing
   * small and relatively static user data in each custom user data document, such
   * as the user's preferred language or the URL of their avatar image. For data that
   * is large, unbounded, or frequently updated, consider only storing a reference to
   * the data in the custom user document or storing the data with a reference to the
   * user's ID rather than in the custom user document.
   */
  custom_data: Type extends 'system' ? undefined : CustomData;
  /**
   * A list of authentication provider identities associated with the user. When a user
   * first logs in with a specific provider, App Services associates the user with an
   * identity object that contains a unique identifier and additional metadata about
   * the user from the provider. For subsequent logins, App Services refreshes the
   * existing identity data but does not create a new identity.
   *
   */
  identities: Type extends 'system' ? undefined : Identity[];
};

export * from './identity';
