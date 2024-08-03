import { c as create_ssr_component, e as escape, a as each, b as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { posts } = data;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<h2>${escape(data.user.email)}</h2> <h1 data-svelte-h="svelte-rmphmr">Posts</h1> ${posts.length > 0 ? `<ul>${each(posts, (post) => {
    return `<li><h2>Post ID: ${escape(post.id)}</h2> <p>${escape(post.text)}</p> ${post.image ? `<img${add_attribute("src", post.image, 0)} alt="Post Image">` : ``} </li>`;
  })}</ul>` : `<p data-svelte-h="svelte-1mopmij">No posts available.</p>`}`;
});
export {
  Page as default
};
