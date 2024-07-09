// src/routes/+page.server.js

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
