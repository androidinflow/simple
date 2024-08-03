const load = async ({ locals, url }) => {
  const authMethods = await locals.pb?.collection("users").listAuthMethods();
  if (!authMethods) {
    return {
      authProviderRedirect: "",
      authProviderState: ""
    };
  }
  const redirectURL = `${url.origin}/auth/callback`;
  const githubAuthProvider = authMethods.authProviders[0];
  const authProviderRedirect = `${githubAuthProvider.authUrl}${redirectURL}`;
  const state = githubAuthProvider.state;
  return {
    authProviderRedirect,
    authProviderState: state
  };
};
export {
  load
};
