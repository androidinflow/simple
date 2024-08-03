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

<form method="POST" use:enhance class="mt-2">
  <input
    class="input input-bordered w-full h-20"
    name="prompt"
    type="text"
    bind:value={inputPrompt}
    placeholder="Enter your prompt"
  />
  <!--   <button type="submit" class="btn mt-2">Submit</button>
 -->
  <button
    type="submit"
    class="my-2 bg-gradient-to-br from-green-500 via-blue-500 to-indigo-700 text-white focus-visible:outline-indigo-500 dark:focus-visible:outline-indigo-500 rounded-xl inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-medium tracking-wide transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      class="size-4"
    >
      <path
        fill-rule="evenodd"
        d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z"
        clip-rule="evenodd"
      />
    </svg>
    AI Assist
  </button>
</form>

<!-- {#if isLoading}
  <p>Loading...</p>
{/if} -->

{#if form}
  {#if form.success}
    <h2>Prompt: {inputPrompt}</h2>
    <p>{responseText}</p>
  {:else}
    <p>Error: {form.response}</p>
  {/if}
{/if}
