import {
  OAuthClientSettings,
  OAuthStartAuthFlow,
  OAuthStartAuthFlowResponse,
} from "@types";
import { getCodeChallenge } from "@utils/pkceUtils";

export class OAuthClient {
  private settings: OAuthClientSettings;
  constructor(settings: OAuthClientSettings) {
    this.settings = settings;
  }
  // TODO: add PKCE support to the flow
  async startAuthFlow(
    params: OAuthStartAuthFlow
  ): Promise<OAuthStartAuthFlowResponse> {
    const query = new URLSearchParams({
      response_type: params.response_type,
      client_id: this.settings.client_id,
      redirect_uri: this.settings.redirect_uri,
    });
    const codeChallenge = params.codeVerifier
      ? await getCodeChallenge(params.codeVerifier)
      : undefined;
    if (params.scope) {
      query.set("scope", params.scope.join(" "));
    }
    if (codeChallenge) {
      query.set("code_challenge_method", codeChallenge[0]);
      query.set("code_challenge", codeChallenge[1]);
    }
    if (params.state) {
      query.set("state", params.state);
    }
    const url = `${this.settings.auth_server}/${
      this.settings.authorization_endpoint ?? "authorize"
    }?${query.toString()}`;

    return {
      authorization_url: url,
    };
  }

  async getAccessToken() {
    //
  }

  async refreshAccessToken() {
    //
  }
}
