import { c as create_ssr_component, b as add_attribute, e as escape, a as each } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  let isLoggedIn;
  let { data } = $$props;
  console.log(data);
  const { comments } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  ({ user, isLoggedIn } = data);
  return `${data.post ? `<div class="items-center relative bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 mb-3 mt-2"><dir class="text-white absolute top-0 right-3" data-svelte-h="svelte-zzz82o">3 hours ago</dir> <dir class="text-white absolute end-3 bottom-0" data-svelte-h="svelte-1fkn4ju"><button class="btn btn-neutral btn-sm">share</button></dir> <div class="w-full"><img class="object-cover w-full rounded-t-lg md:h-2/4 md:rounded-none md:rounded-s-lg"${add_attribute("src", "https://end.redruby.one/api/files/kaggy7pczl45wc9/" + data.post.id + "/" + data.post.image, 0)} alt="ggy"> <div class="flex flex-col justify-between p-4 leading-normal"><p class="mb-3 font-bold text-xl text-gray-700">${escape(data.post.text)}</p></div></div></div>  <div class="w-full bg-white rounded-lg border p-1"><h3 class="font-bold" data-svelte-h="svelte-102jf34">Discussion</h3> ${comments.length > 0 ? `<div class="flex flex-col">${each(comments, (comment) => {
    return `<div class="border rounded-md p-3 ml-3 my-3"><div class="flex gap-3 items-center"><img alt="kos"${add_attribute("src", "https://joesch.moe/api/v1/" + comment.expand.user.username, 0)} class="object-cover w-8 h-8 rounded-full border-2 border-emerald-400 shadow-emerald-400 "> <h3 class="font-bold">${escape(comment.expand.user.username)}</h3></div> <p class="text-gray-600 mt-2">${escape(comment.text)}</p> </div>`;
  })}</div>` : `<p data-svelte-h="svelte-1ylba2n">no comments yet.</p>`}</div> ${isLoggedIn ? `<form><div class="w-full px-3 my-2" data-svelte-h="svelte-42ww00"><textarea class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" required></textarea></div> <div class="w-full flex justify-end px-3"><input type="submit" class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 btn btn-neutral" ${!isLoggedIn ? "disabled" : ""} value="Post Comment"></div></form>` : `<h2 data-svelte-h="svelte-5nzw3e">Login to leave comment</h2>`}` : `<h1 data-svelte-h="svelte-fmpjd0">post do not exist!</h1>`}`;
});
export {
  Page as default
};
