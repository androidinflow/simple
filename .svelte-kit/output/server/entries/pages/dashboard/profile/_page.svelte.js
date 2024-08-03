import { c as create_ssr_component, b as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<form><label class="input input-bordered flex items-center gap-2 mb-1" data-svelte-h="svelte-19655rc">Name :
    <input type="text" class="grow" placeholder=""></label> <label class="input input-bordered flex items-center gap-2 mb-1">username :
    <input type="text" class="grow" placeholder="Daisy"${add_attribute("value", data.user.username, 0)} disabled></label> <label class="input input-bordered flex items-center gap-2 mb-1">email :
    <input type="text" class="grow" placeholder="Daisy"${add_attribute("value", data.user.email, 0)} disabled></label></form> <a href="/logout" data-svelte-h="svelte-1fekjx9"><button class="btn btn-neutral">Logout</button></a>`;
});
export {
  Page as default
};
