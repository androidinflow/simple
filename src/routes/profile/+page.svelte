<script>
  export let data;
</script>

{#if data.isLoggedIn}
  <p>{data.user.username}</p>
{/if}
