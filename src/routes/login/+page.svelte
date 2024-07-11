<!-- // src/routes/login/+page.svelte
 -->

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

<dir class=" justify-center items-center flex h-72">
  <button class="btn btn-neutral items-center" on:click={gotoAuthProvider}
    >Login with github</button
  >
</dir>
