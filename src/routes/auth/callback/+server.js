// src/routes/auth/callback/+server.js

import { redirect } from "@sveltejs/kit";

// Define the GET request handler
export const GET = async ({ locals, url, cookies }) => {
  // Set the redirect URL and expected state
  const redirectURL = `${url.origin}/auth/callback`;
  const expectedState = cookies.get("state");

  // Get the state and code from the query parameters
  const query = new URLSearchParams(url.search);
  const state = query.get("state");
  const code = query.get("code");

  // Get the authentication providers
  const authMethods = await locals.pb?.collection("users").listAuthMethods();

  // If there are no authentication providers, redirect to the login page
  if (!authMethods?.authProviders) {
    console.log("auth providers not found");
    throw redirect(303, "/login");
  }

  // Get the first authentication provider
  const provider = authMethods.authProviders[0];

  // If there is no authentication provider, redirect to the login page
  if (!provider) {
    console.log("Provider not found");
    throw redirect(303, "/login");
  }

  // If the expected state does not match the state from the query parameters, redirect to the login page
  if (expectedState !== state) {
    console.log("state does not match expected", expectedState, state);
    throw redirect(303, "/login");
  }

  // Authenticate the user with OAuth2Code
  try {
    await locals.pb
      ?.collection("users")
      .authWithOAuth2Code(
        provider.name,
        code || "",
        provider.codeVerifier,
        redirectURL
      );
  } catch (err) {
    console.log("Error logging in with OAuth2 user", err);
  }

  // Redirect to the home page
  throw redirect(303, "/");
};
