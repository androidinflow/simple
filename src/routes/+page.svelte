<script>
  import { onMount } from "svelte";
  export let data;
  $: ({ user, isLoggedIn } = data);
  const { posts } = data;

  import { enhance } from "$app/forms";
  import { fade, fly } from "svelte/transition";

  import alian from "$lib/alian.png";

  let messages = [];
  let inputMessage = "How are u?";
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

  onMount(() => {
    // Simulate an automatic message submission on mount
    const initialMessage = "Hey!";
    messages = [...messages, { role: "user", content: initialMessage }];
    // Optionally, you could call handleSubmit here if it needs to trigger some async actions
  });
</script>

<div
  class="mx-auto flex flex-col md:flex-row h-full p-4 bg-black rounded-lg shadow-md mt-2"
>
  <div class="flex-1 p-2 relative max-h-96">
    <img
      transition:fade
      src={alian}
      alt="alian"
      class="h-full object-cover w-full rounded-md"
    />
  </div>

  <div class="flex-1 relative mt-4 md:mt-0 md:ml-4 max-h-96">
    <div
      class="messages overflow-y-auto rounded-lg py-4 h-full max-h-[calc(100%-70px)]"
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
    <div class="w-full max-w-full">
      <form method="POST" use:enhance={handleSubmit} class="flex gap-2">
        <input type="hidden" name="history" value={JSON.stringify(messages)} />

        <div class="flex gap-1 w-full">
          <input
            type="text"
            name="message"
            bind:value={inputMessage}
            placeholder="Type your message..."
            disabled={isLoading}
            class="grow p-2 border border-gray-300 rounded-lg"
          />

          <button
            type="submit"
            disabled={isLoading || isInputEmpty}
            class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >Generate</button
          >
        </div>
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
{/if}
<div class="divider"></div>

{#if posts.length > 0}
  <ul class="grid gap-1 grid-cols-1 md:grid-cols-2">
    {#each posts as post}
      <a href={"/details?post=" + post.id}>
        <li class="w-full bg-black mb-2 rounded-md border-black border-2">
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
