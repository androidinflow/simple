const load = async ({ locals }) => {
  const user = locals.user;
  let output = {
    user: void 0,
    isLoggedIn: false,
    posts: []
  };
  if (user) {
    output.user = user;
    output.isLoggedIn = true;
  }
  try {
    const posts = await locals.pb.collection("posts").getFullList({
      sort: "-created"
      // Sort by creation date, descending
    });
    output.posts = posts.map((post) => ({
      id: post.id,
      text: post.text,
      image: post.image
    }));
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
  return output;
};
export {
  load
};
