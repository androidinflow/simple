const load = async ({ locals, url }) => {
  try {
    const postId = url.searchParams.get("post");
    console.log(postId);
    const post = await locals.pb.collection("posts").getOne(postId);
    const comments = await locals.pb.collection("comments").getFullList({
      expand: "user, post",
      filter: `post="${postId}"`
    });
    console.log(comments);
    return {
      post: {
        id: post.id,
        text: post.text,
        image: post.image
      },
      comments: comments.map((comment) => ({
        id: comment.id,
        text: comment.text,
        user: comment.user,
        expand: comment.expand
      }))
    };
  } catch (err) {
    console.error("Error fetching posts:", err);
    return {
      post: null
    };
  }
};
export {
  load
};
