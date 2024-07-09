<script>
  export let data;
  $: ({ user, isLoggedIn } = data);
</script>

{#if isLoggedIn}
  <p>{user.username}</p>
{/if}
