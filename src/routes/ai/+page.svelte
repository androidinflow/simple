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
    name="prompt"
    type="text"
    bind:value={inputPrompt}
    placeholder="Enter your prompt"
  />
  <button type="submit">Submit</button>
</form>

{#if isLoading}
  <!-- Step 3: Conditionally render loading indicator -->
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
