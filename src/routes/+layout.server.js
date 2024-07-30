// Define the load function
export const load = async ({ locals }) => {
  const user = locals.user;

  // Initialize the output object
  let output = {
    user: undefined,
    isLoggedIn: false,
    posts: [],
  };

  // Check if user is logged in
  if (user) {
    output.user = user;
    output.isLoggedIn = true;
  }

  // Fetch the posts
  try {
    const posts = await locals.pb.collection("posts").getFullList({
      sort: "-created", // Sort by creation date, descending
    });

    // Map the posts to the desired format
    output.posts = posts.map((post) => ({
      id: post.id,
      text: post.text,
      image: post.image,
    }));
  } catch (err) {
    console.error("Error fetching posts:", err);
    // If there's an error, posts array will be empty as initialized
  }

  // Return the output object
  return output;
};
