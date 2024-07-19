// src/routes/+page.server.js

export const load = async ({ locals, url }) => {
  try {
    const postId = url.searchParams.get("post");
    console.log(postId);

    const post = await locals.pb.collection("posts").getOne(postId);
    const comments = await locals.pb.collection("comments").getFullList({
      expand: "user",
    });
    console.log(comments);

    // Return the posts to the frontend
    return {
      post: {
        id: post.id,
        text: post.text,
        image: post.image,
      },
      comments: comments.map((comment) => ({
        id: comment.id,
        text: comment.text,
        user: comment.user,
        expand: comment.expand,
      })),
    };
  } catch (err) {
    console.error("Error fetching posts:", err);
    return {
      post: null,
    };
  }
};
