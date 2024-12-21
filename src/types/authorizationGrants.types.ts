export type OAuth2Token = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope?: string;
};

export type OAuth2AuthorizationRequest = {
  response_type: string;
  client_id: string;
  redirect_uri?: string;
  scope?: string;
  state?: string;
};

export type OAuth2AuthorizationResponse = {
  code: string;
  state: string;
};

export type OAuth2AccessTokenRequest = {
  grant_type: string;
  code: string;
  redirect_uri: string;
  client_id: string;
};

export type OAuth2GrantType =
  | "authorization_code"
  | "implicit"
  | "password"
  | "client_credentials"
  | "refresh_token";

export type OAuth2CodeChallengeMethod = "S256" | "plain";
