import {
  OAuthClientSettings,
  OAuthStartAuthFlow,
  OAuthStartAuthFlowResponse,
} from "@types";

export class OAuthClient {
  private settings: OAuthClientSettings;
  constructor(settings: OAuthClientSettings) {
    this.settings = settings;
  }

  async startAuthFlow(
    params: OAuthStartAuthFlow
  ): Promise<OAuthStartAuthFlowResponse> {
    const query = new URLSearchParams({
      response_type: params.response_type,
      client_id: this.settings.client_id,
      redirect_uri: this.settings.redirect_uri,
    });
    if (params.scope) {
      query.set("scope", params.scope.join(" "));
    }
    if (params.state) {
      query.set("state", params.state);
    }
    console.log("query", this.settings.auth_server);
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
