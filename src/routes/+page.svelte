<script>
  export let data;
  $: ({ user, isLoggedIn } = data);
  const { posts } = data;

  import { enhance } from "$app/forms";
  import { fade, fly } from "svelte/transition";

  import alian from "$lib/alian.png";

  let messages = [];
  let inputMessage = "Hey!";
  let isLoading = false;

  $: isInputEmpty = !inputMessage.trim();

  function handleSubmit(event) {
    isLoading = true;
    return async ({ result }) => {
      isLoading = false;
      if (result.type === "success") {
        messages = result.data.history;
        inputMessage = "";
      } else {
        alert(result.data.error);
      }
    };
  }
</script>

<div
  class="mx-auto flex flex-col md:flex-row h-full p-4 bg-black rounded-lg shadow-md mt-2"
>
  <div class="  flex-1 p-2 relative">
    <img
      src={alian}
      alt="alian"
      class="h-full object-cover w-full rounded-md"
    />
  </div>

  <div class="flex-1 relative mt-4 md:mt-0 md:ml-4">
    <div
      class="messages overflow-y-auto rounded-lg p-4 h-full max-h-[calc(100%-70px)]"
      id="messages"
    >
      {#each messages as message, i (i)}
        <div
          class={`message p-2 rounded-lg mb-2 ${message.role === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-200 text-gray-800"}`}
          transition:fly={{ y: 20, duration: 300 }}
        >
          <strong>{message.role === "user" ? "You" : "AI"}:</strong>
          {message.content}
        </div>
      {/each}
    </div>
    <div class="w-full max-w-[calc(100%-1rem)]">
      <form method="POST" use:enhance={handleSubmit} class="flex gap-2">
        <input type="hidden" name="history" value={JSON.stringify(messages)} />
        <input
          type="text"
          cols="2"
          rows="5"
          name="message"
          bind:value={inputMessage}
          placeholder="Type your message..."
          disabled={isLoading}
          class="flex-grow p-2 border border-gray-300 rounded-lg"
        />
        <!-- <button
          type="submit"
          disabled={isLoading || isInputEmpty}
          class="p-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          >Send</button
        > -->

        <button
          type="submit"
          disabled={isLoading || isInputEmpty}
          class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >Generate</button
        >
      </form>
      {#if isLoading}
        <div class="loader text-center text-gray-600 mt-4" transition:fade>
          Loading...
        </div>
      {/if}
    </div>
  </div>
</div>

{#if isLoggedIn}
  <h2>Welcome {user?.username}</h2>

  <h3>{user?.email}</h3>

  <!--   <a href="/logout">
    <button class="btn btn-neutral">Logout</button>
  </a>
{:else}
  <a href="/login">
    <button class="btn btn-neutral">Login</button>
  </a> -->
{/if}
<div class="divider"></div>

{#if posts.length > 0}
  <ul class="grid gap-1 grid-cols-1 md:grid-cols-2">
    {#each posts as post}
      <a href={"/details?post=" + post.id}>
        <li class="w-full bg-slate-500 mb-2 rounded-md">
          <!--<h2>Post ID: {post.id}</h2>-->
          <p class="w-full py-4 px-2 text-white">{post.text}</p>
          {#if post.image}
            <img
              class="w-full"
              src="https://end.redruby.one/api/files/posts/{post.id}/{post.image}"
              alt={posts.Text}
            />
          {/if}
        </li>
      </a>
    {/each}
  </ul>
{:else}
  <p>No posts available. maybe if u login???</p>
{/if}
