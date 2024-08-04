<!-- +page.svelte -->
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

<div class="chat-container">
  <h1>Chat with AI</h1>
  <div class="messages" id="messages">
    {#each messages as message, i (i)}
      <div
        class="message {message.role}"
        transition:fly={{ y: 20, duration: 300 }}
      >
        <strong>{message.role === "user" ? "You" : "AI"}:</strong>
        {message.content}
      </div>
    {/each}
  </div>
  <form method="POST" use:enhance={handleSubmit}>
    <input type="hidden" name="history" value={JSON.stringify(messages)} />
    <input
      type="text"
      name="message"
      bind:value={inputMessage}
      placeholder="Type your message..."
      disabled={isLoading}
    />
    <button type="submit" disabled={isLoading || isInputEmpty}>Send</button>
  </form>
  {#if isLoading}
    <div class="loader" transition:fade>Loading...</div>
  {/if}
</div>

<style>
  :global(body) {
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
  }

  .chat-container {
    margin: 20px auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    color: #333;
  }

  .messages {
    height: 400px;
    overflow-y: auto;
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 20px;
  }

  .message {
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 18px;
    max-width: 80%;
    word-wrap: break-word;
  }

  .user {
    background-color: #007bff;
    color: white;
    margin-left: auto;
  }

  .assistant {
    background-color: #f1f3f5;
    color: #333;
  }

  form {
    display: flex;
    gap: 10px;
  }

  input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }

  button:hover:not(:disabled) {
    background-color: #0056b3;
  }

  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  .loader {
    text-align: center;
    margin-top: 10px;
    color: #666;
  }
</style>
