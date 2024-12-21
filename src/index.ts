import { OAuthClient } from "@core/client";
import { OAuth2Token } from "@types";

export { OAuthClient };

export type { OAuth2Token };

const client = new OAuthClient({
  auth_server: "dev-g501z34fleej83sb.us.auth0.com",
  client_id: "pLpFOuWCqzFH2HvmMCJgjuCmc4yMA3YX",
  redirect_uri: "http://localhost:3000/callback",
});

const demo = async () => {
  const url = await client.startAuthFlow({
    response_type: "code",
  });

  console.log(url);
};

demo();
