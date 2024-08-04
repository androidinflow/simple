<!-- // src/routes/login/+page.svelte
 -->

<script>
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

<div
  class=" justify-center items-center gap-7 h-[calc(100vh_-_5rem)] flex bg-black"
>
  <p class="text-white">login to use all the fututes of the site.</p>
  <button
    class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    on:click={gotoAuthProvider}>Login with github</button
  >
</div>
