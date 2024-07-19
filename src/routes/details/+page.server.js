// src/routes/+page.server.js

export const load = async ({ locals, url }) => {
  try {
    const postId = url.searchParams.get("post");
    console.log(postId);

    const post = await locals.pb.collection("posts").getOne(postId);

    // Return the posts to the frontend
    return {
      post: {
        id: post.id,
        text: post.text,
        image: post.image,
      },
    };
  } catch (err) {
    console.error("Error fetching posts:", err);
    return {
      post: null,
    };
  }
};
