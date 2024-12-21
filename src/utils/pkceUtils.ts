export async function getCodeChallenge(
  codeVerifier: string
): Promise<["plain" | "S256", string]> {
  const webCrypto = await getWebCrypto();
  return [
    "S256",
    base64Url(
      await webCrypto.subtle.digest("SHA-256", stringToBuffer(codeVerifier))
    ),
  ];
}

async function getWebCrypto(): Promise<typeof window.crypto> {
  // Browsers
  if (typeof window !== "undefined" && window.crypto) {
    if (!window.crypto.subtle?.digest) {
      throw new Error(
        "The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details"
      );
    }
    return window.crypto;
  }
  // Web workers possibly
  if (typeof self !== "undefined" && self.crypto) {
    return self.crypto;
  }
  // Node
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const crypto = await import("crypto");
  return crypto.webcrypto as typeof window.crypto;
}

function base64Url(buf: ArrayBuffer): string {
  return btoa(String.fromCharCode(...Array.from(new Uint8Array(buf))))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function stringToBuffer(input: string): ArrayBuffer {
  const buf = new Uint8Array(input.length);
  for (let i = 0; i < input.length; i++) {
    buf[i] = input.charCodeAt(i) & 0xff;
  }
  return buf;
}

export async function generateCodeVerifier(): Promise<string> {
  const webCrypto = await getWebCrypto();
  const arr = new Uint8Array(32);
  webCrypto.getRandomValues(arr);
  return base64Url(arr);
}
