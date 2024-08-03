import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `  <dir class="justify-center items-center flex h-72"><button class="btn btn-neutral items-center" data-svelte-h="svelte-1bcbnvr">Login with github</button></dir>`;
});
export {
  Page as default
};
