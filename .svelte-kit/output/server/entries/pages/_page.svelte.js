import { c as create_ssr_component, e as escape, a as each, b as add_attribute } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  let isLoggedIn;
  let { data } = $$props;
  const { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  ({ user, isLoggedIn } = data);
  return `<div class="bg-yellow-600 w-full h-56"></div> ${isLoggedIn ? `<h2>Welcome ${escape(user?.username)}</h2> <h3>${escape(user?.email)}</h3> ` : ``} <div class="divider"></div> ${posts.length > 0 ? `<ul>${each(posts, (post) => {
    return `<a${add_attribute("href", "/details?post=" + post.id, 0)}><li> <p>${escape(post.text)}</p> ${post.image ? `<img width="400px" src="${"https://end.redruby.one/api/files/posts/" + escape(post.id, true) + "/" + escape(post.image, true)}"${add_attribute("alt", posts.Text, 0)}>` : ``}</li> </a>`;
  })}</ul>` : `<p data-svelte-h="svelte-19xlwmz">No posts available. maybe if u login???</p>`}`;
});
export {
  Page as default
};
