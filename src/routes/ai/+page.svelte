<script>
  import { enhance } from "$app/forms";
  import { fade, fly } from "svelte/transition";

  let messages = [];
  let inputMessage = "";
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

<div class="mx-auto p-4 bg-red-200 min-h-full rounded-lg shadow-md mt-4">
  <h1 class="text-2xl font-bold text-center text-gray-800">Chat with AI</h1>
  <div
    class="messages overflow-y-auto h-96 border border-gray-300 rounded-lg p-4 my-4"
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
  <div class=" w-ful">
    <form method="POST" use:enhance={handleSubmit} class="flex gap-2">
      <input type="hidden" name="history" value={JSON.stringify(messages)} />
      <input
        type="text"
        name="message"
        bind:value={inputMessage}
        placeholder="Type your message..."
        disabled={isLoading}
        class="flex-grow p-2 border border-gray-300 rounded-lg"
      />
      <button
        type="submit"
        disabled={isLoading || isInputEmpty}
        class="p-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        >Send</button
      >
    </form>
    {#if isLoading}
      <div class="loader text-center text-gray-600 mt-4" transition:fade>
        Loading...
      </div>
    {/if}
  </div>
</div>

<style>
  :global(body) {
    @apply font-sans bg-gray-100;
  }

  .messages {
    @apply flex flex-col;
  }
</style>
