<script>
  import "../app.css";
  export let data;
  $: ({ user, isLoggedIn } = data);
</script>

<div class="navbar bg-base-200">
  <div>
    <a href="https://kon.redruby.one" class="btn btn-ghost text-xl">RedRuby</a>
    {#if isLoggedIn}
      <a href="/logout">
        <button class="btn btn-neutral">Logout</button>
      </a>
    {:else}
      <a href="/login">
        <button class="btn btn-neutral">Login using Github</button>
      </a>
    {/if}
  </div>
</div>
<div class="container mx-auto pt-2"><slot></slot></div>
