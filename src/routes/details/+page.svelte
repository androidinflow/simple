<script>
  export let data;
  console.log(data);
  $: ({ user, isLoggedIn } = data);
  const { comments } = data;
  /*   console.log(comments[0].expand);*/
  /* const post = comments[0].expand.post; */
</script>

{#if data.post}
  <div
    class="flex flex-col items-center relative bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3"
  >
    <dir class="text-white absolute top-0 right-3">3 hours ago</dir>
    <dir class="text-white absolute end-3 bottom-0"
      ><button class="btn btn-neutral btn-sm">share</button></dir
    >

    <img
      class="object-cover w-full rounded-t-lg h-96 md:h-full md:w-80 md:rounded-none md:rounded-s-lg"
      src={"https://end.redruby.one/api/files/kaggy7pczl45wc9/" +
        data.post.id +
        "/" +
        data.post.image}
      alt="ggy"
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {data.post.text}
      </p>
    </div>
  </div>

  <!-- comments--------------------
 -->
  <div class="w-full bg-white rounded-lg border p-1">
    <h3 class="font-bold">Discussion</h3>

    {#if comments.length > 0}
      <div class="flex flex-col">
        {#each comments as comment}
          <div class="border rounded-md p-3 ml-3 my-3">
            <div class="flex gap-3 items-center">
              <img
                alt="kos"
                src={"https://joesch.moe/api/v1/" +
                  comment.expand.user.username}
                class="object-cover w-8 h-8 rounded-full
                            border-2 border-emerald-400 shadow-emerald-400
                            "
              />

              <h3 class="font-bold">{comment.expand.user.username}</h3>
            </div>
            <p class="text-gray-600 mt-2">{comment.text}</p>
          </div>
        {/each}
      </div>
    {:else}
      <p>no comments yet.</p>
    {/if}
  </div>

  {#if isLoggedIn}
    <form>
      <div class="w-full px-3 my-2">
        <textarea
          class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
          name="body"
          required
        ></textarea>
      </div>

      <div class="w-full flex justify-end px-3">
        <input
          type="submit"
          class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 btn btn-neutral"
          disabled={!isLoggedIn}
          value="Post Comment"
        />
      </div>
    </form>
  {:else}
    <h2>Login to leave comment</h2>
  {/if}
{:else}
  <h1>post do not exist!</h1>
{/if}
