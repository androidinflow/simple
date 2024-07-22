<script>
  export let data;
  console.log(data);
</script>

<form>
  <label class="input input-bordered flex items-center gap-2 mb-1">
    Name :
    <input type="text" class="grow" placeholder="" />
  </label>

  <label class="input input-bordered flex items-center gap-2 mb-1">
    username :
    <input
      type="text"
      class="grow"
      placeholder="Daisy"
      value={data.user.username}
      disabled
    />
  </label>

  <label class="input input-bordered flex items-center gap-2 mb-1">
    email :
    <input
      type="text"
      class="grow"
      placeholder="Daisy"
      value={data.user.email}
      disabled
    />
  </label>
</form>

<a href="/logout">
  <button class="btn btn-neutral">Logout</button>
</a>
