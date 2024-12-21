export interface OAuthClientSettings {
  auth_server: string;
  client_id: string;
  client_secret?: string;
  redirect_uri: string;
  scope?: string[];
  authorization_endpoint?: string;
  token_endpoint?: string;
}


