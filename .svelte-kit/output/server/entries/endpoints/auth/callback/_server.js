import { r as redirect } from "../../../../chunks/index.js";
const GET = async ({ locals, url, cookies }) => {
  const redirectURL = `${url.origin}/auth/callback`;
  const expectedState = cookies.get("state");
  const query = new URLSearchParams(url.search);
  const state = query.get("state");
  const code = query.get("code");
  const authMethods = await locals.pb?.collection("users").listAuthMethods();
  if (!authMethods?.authProviders) {
    console.log("auth providers not found");
    throw redirect(303, "/login");
  }
  const provider = authMethods.authProviders[0];
  if (!provider) {
    console.log("Provider not found");
    throw redirect(303, "/login");
  }
  if (expectedState !== state) {
    console.log("state does not match expected", expectedState, state);
    throw redirect(303, "/login");
  }
  try {
    await locals.pb?.collection("users").authWithOAuth2Code(
      provider.name,
      code || "",
      provider.codeVerifier,
      redirectURL
    );
  } catch (err) {
    console.log("Error logging in with OAuth2 user", err);
  }
  throw redirect(303, "/");
};
export {
  GET
};
