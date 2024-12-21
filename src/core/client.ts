import { OAuthClientSettings } from "@types";

export class OAuthClient {
  private settings: OAuthClientSettings;
  constructor(settings: OAuthClientSettings) {
    this.settings = settings;
  }

  async startAuthFlow() {
    //
  }

  async getAccessToken() {
    //
  }

  async refreshAccessToken() {
    //
  }
}
