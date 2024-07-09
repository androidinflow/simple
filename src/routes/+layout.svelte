<script>
  import "../app.css";
  export let data;
  $: ({ user, isLoggedIn } = data);
</script>

<div class="navbar bg-base-200">
  <div class="flex justify-between w-full">
    <a href="https://kon.redruby.one" class="btn btn-ghost text-xl">RedRuby</a>
    {#if isLoggedIn}
      <div class="avatar">
        <div class="mask mask-squircle w-24">
          <img src={"https://joesch.moe/api/v1/" + user?.username} alt="kos" />
        </div>
      </div>
    {/if}
  </div>
</div>
<div class="container mx-auto pt-2"><slot></slot></div>
