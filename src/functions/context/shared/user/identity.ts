/**
 * A list of authentication provider identities associated with the user. When a user
 * first logs in with a specific provider, App Services associates the user with an
 * identity object that contains a unique identifier and additional metadata about
 * the user from the provider. For subsequent logins, App Services refreshes the
 * existing identity data but does not create a new identity.
 *
 */
export type Identity = {
  /**
   * A provider-generated string that uniquely identifies this identity
   */
  id: string;
  /**
   * The type of authentication provider associated with this identity.
   */
  provider_type: string;
  /**
   * Additional metadata from the authentication provider that describes
   * the user. The exact field names and values will vary depending on which
   * authentication providers the user has logged in with. For a provider-specific
   * breakdown of user identity data, see User Metadata.
   */
  data: {
    [key: string]: any;
  };
};
