export function load({ url }) {
  const prompt = url.searchParams.get("prompt");
  return {
    prompt,
  };
}

export const actions = {
  default: async ({ request, fetch }) => {
    const data = await request.formData();
    const prompt = data.get("prompt");

    try {
      const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama2-uncensored",
          prompt: prompt,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let result = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.trim() !== "") {
            const parsed = JSON.parse(line);
            result += parsed.response;
          }
        }
      }

      return { success: true, response: result.trim() };
    } catch (error) {
      console.error("Error:", error);
      return { success: false, response: error.message };
    }
  },
};
