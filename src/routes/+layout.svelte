<script>
  import "../app.css";
  export let data;
  $: ({ user, isLoggedIn } = data);
</script>

<div class="navbar bg-base-200">
  <div class="flex justify-between w-full mx-1">
    <a href="https://kon.redruby.one" class="btn btn-ghost text-xl m-0 p-0"
      >RedRuby</a
    >
    {#if isLoggedIn}
      <div class="avatar">
        <div
          class="ring-black ring-offset-black w-10 rounded-full ring ring-offset-1"
        >
          <img
            src={"https://joesch.moe/api/v1/" + data.Layout.user.username}
            alt="kos"
          />
        </div>
      </div>
    {/if}
  </div>
</div>
<div class="container mx-auto p-2"><slot></slot></div>
