import { OAuth2GrantType, OAuth2Token } from "./authorizationGrants.types";

export interface OAuthClientSettings {
  auth_server: string;
  client_id: string;
  client_secret?: string;
  redirect_uri: string;
  authorization_endpoint?: string;
  token_endpoint?: string;
}

export type OAuthStartAuthFlow = {
  response_type: OAuth2GrantType;
  state?: string;
  scope?: string[];
};

export type OAuthStartAuthFlowResponse =
  | {
      authorization_url: string;
    }
  | OAuth2Token;
