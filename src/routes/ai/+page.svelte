<script>
  import { goto } from "$app/navigation";

  export let data;
  let responseText = "";
  let inputPrompt = data.props.prompt;

  async function streamResponse(response) {
    responseText = "";
    let words = response.split(" ");
    for (let word of words) {
      responseText += word + " ";
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }

  function handleSubmit() {
    goto(`?prompt=${encodeURIComponent(inputPrompt)}`);
  }

  $: {
    if (data.props.response) {
      streamResponse(data.props.response);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={inputPrompt} placeholder="Enter your prompt" />
  <button type="submit">Submit</button>
</form>

<h2>Prompt: {data.props.prompt}</h2>
<h3>Response:</h3>
<p>{responseText}</p>
