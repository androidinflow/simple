<script>
  import { enhance } from "$app/forms";

  export let data;
  export let form;

  let responseText = "";
  let inputPrompt = data.prompt || "";
  let isLoading = false; // Step 1: Add a loading state variable

  async function streamResponse(response) {
    responseText = "";
    let words = response.split(" ");
    for (let word of words) {
      responseText += word + " ";
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    isLoading = false; // Update the loading state once done
  }

  $: {
    if (form?.response) {
      isLoading = true; // Set loading state to true when response starts
      streamResponse(form.response);
    }
  }
</script>

<form method="POST" use:enhance>
  <input
    class="input input-bordered w-full"
    name="prompt"
    type="text"
    bind:value={inputPrompt}
    placeholder="Enter your prompt"
  />
  <button type="submit">Submit</button>
</form>

{#if isLoading}
  Step 3: Conditionally render loading indicator -->
  <p>Loading...</p>
{/if}

{#if form}
  {#if form.success}
    <h2>Prompt: {inputPrompt}</h2>
    <h3>Response:</h3>
    <p>{responseText}</p>
  {:else}
    <p>Error: {form.response}</p>
  {/if}
{/if}

<!-- 
<script>
  import ollama from "ollama";

  let prompt = "";
  let response = "";
  let isLoading = false;

  async function getResponse() {
    if (!prompt) return;
    isLoading = true;
    response = "";

    try {
      const res = await ollama.chat({
        model: "phi3:mini",
        messages: [{ role: "user", content: prompt }],
      });
      response = res.message.content;
    } catch (error) {
      response = "Error fetching response: " + error.message;
    } finally {
      isLoading = false;
    }
  }
</script>

<main>
  <h1>Ask the AI</h1>
  <form on:submit|preventDefault={getResponse}>
    <label for="prompt">Enter your question:</label>
    <input type="text" id="prompt" bind:value={prompt} />
    <button type="submit" disabled={isLoading}>Ask</button>
  </form>

  {#if isLoading}
    <p>Loading...</p>
  {/if}

  {#if response}
    <h2>Response:</h2>
    <p>{response}</p>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
  }
</style>

llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

<!-- 
<script>
  let prompt = "";
  let response = "";
  let isLoading = false;

  async function getResponse() {
    if (!prompt) return;
    isLoading = true;
    response = "";

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (res.ok) {
        const data = await res.json();
        response = data.content;
      } else {
        const error = await res.json();
        response = "Error fetching response: " + error.error;
      }
    } catch (error) {
      response = "Error fetching response: " + error.message;
    } finally {
      isLoading = false;
    }
  }
</script>

<main>
  <h1>Ask the AI</h1>
  <form on:submit|preventDefault={getResponse}>
    <label for="prompt">Enter your question:</label>
    <input type="text" id="prompt" bind:value={prompt} />
    <button type="submit" disabled={isLoading}>Ask</button>
  </form>

  {#if isLoading}
    <p>Loading...</p>
  {/if}

  {#if response}
    <h2>Response:</h2>
    <p>{response}</p>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
  }
</style>
 -->
