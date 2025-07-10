// src/services/tokenService.ts

let testToken: string | null = null;

export function setTestToken(token: string) {
  testToken = token;
}

export function getTestToken() {
  return testToken;
}

// Optionally, a helper to add the token to headers
export function withAuth(headers: Record<string, string> = {}) {
  const token = getTestToken();
  return token ? { ...headers, Authorization: `Bearer ${token}` } : headers;
}
