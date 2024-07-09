<script>
  import { browser } from "$app/environment";

  // Define the data variable
  export let data;

  // Define the gotoAuthProvider function
  function gotoAuthProvider() {
    // Save the state in the cookie
    if (browser) {
      document.cookie = `state=${data?.authProviderState}`;
    }

    // Redirect the user to the OAuth login for Github
    window.location.href = data.authProviderRedirect || "";
  }
</script>

<button on:click={gotoAuthProvider}>Login with github</button>
