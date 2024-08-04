// src/routes/+page.server.js
/* 
  export const load = async ({ locals }) => {
    try {
      const posts = await locals.pb.collection("posts").getFullList({
        sort: "-created", // Sort by creation date, descending
      });

      // Return the posts to the frontend
      return {
        posts: posts.map((post) => ({
          id: post.id,
          text: post.text,
          image: post.image,
        })),
      };
    } catch (err) {
      console.error("Error fetching posts:", err);
      return {
        posts: [],
      };
    }
  };
 */

// +page.server.js
import { Ollama } from "ollama";
import { fail } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const message = data.get("message");
    const history = JSON.parse(data.get("history") || "[]");

    if (!message || message.trim() === "") {
      return fail(400, { error: "Message cannot be empty" });
    }

    try {
      const chatHistory = [...history, { role: "user", content: message }];
      const ollama = new Ollama({ host: "http://192.168.50.112:11222" });
      const response = await ollama.chat({
        model: "phi3:mini",
        messages: chatHistory,
      });

      chatHistory.push({
        role: "assistant",
        content: response.message.content,
      });

      return {
        success: true,
        message: response.message.content,
        history: chatHistory,
      };
    } catch (error) {
      console.error("Error:", error);
      return fail(500, {
        error: "An error occurred while processing your request.",
      });
    }
  },
};
