// src/routes/login/+page.server.js

// Define the load function
export const load = async ({ locals, url }) => {
  // Get all the auth providers
  const authMethods = await locals.pb?.collection("users").listAuthMethods();
  if (!authMethods) {
    return {
      authProviderRedirect: "",
      authProviderState: "",
    };
  }

  // Get the first auth provider (Github)
  const redirectURL = `${url.origin}/auth/callback`;
  const githubAuthProvider = authMethods.authProviders[0];

  // Set the auth provider redirect URL and state
  const authProviderRedirect = `${githubAuthProvider.authUrl}${redirectURL}`;
  const state = githubAuthProvider.state;

  // Return the auth provider redirect URL and state
  return {
    authProviderRedirect: authProviderRedirect,
    authProviderState: state,
  };
};
