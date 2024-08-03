import { c as create_ssr_component, d as spread, f as escape_attribute_value, g as escape_object, s as subscribe, v as validate_component, b as add_attribute, a as each, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { size = "1em" } = $$props;
  let { viewBox = void 0 } = $$props;
  let { color = "currentColor" } = $$props;
  let { title = void 0 } = $$props;
  let { className = "" } = $$props;
  let innerHtml;
  let attr = {};
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0) $$bindings.viewBox(viewBox);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  {
    {
      attr = {};
      if (color) {
        if (src.a.stroke !== "none") {
          attr.stroke = "currentColor";
        }
        if (src.a.fill !== "none") {
          attr.fill = "currentColor";
        }
      }
    }
  }
  {
    {
      innerHtml = (title ? `<title>${title}</title>` : "") + src.c;
    }
  }
  return `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { viewBox: escape_attribute_value(viewBox) },
      {
        style: escape_attribute_value(color ? "color: " + color + ";" : "")
      },
      { "stroke-width": "0" },
      { class: escape_attribute_value(className) },
      escape_object(src.a),
      escape_object(attr),
      { xmlns: "http://www.w3.org/2000/svg" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${innerHtml}<!-- HTML_TAG_END --></svg>`;
});
const RiSystemMenuUnfoldFill = { a: { viewBox: "0 0 24 24", fill: "currentColor" }, c: '<path d="M21 17.9996V19.9996H3V17.9996H21ZM17 3.5L22 8.49955L17 13.5V3.5ZM12 10.9996V12.9996H3V10.9996H12ZM12 3.99955V5.99955H3V3.99955H12Z"></path>' };
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  let isLoggedIn;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  ({ user, isLoggedIn } = data);
  $$unsubscribe_page();
  return `  <div class="drawer lg:drawer-open"><input id="my-drawer-4" type="checkbox" class="drawer-toggle"> <div class="drawer-content p-2"> <div class="navbar w- bg-base-200"><div class="flex justify-between w-full mx-1"><label for="my-drawer-4" class="lg:hidden scale-150 p-2">${validate_component(Icon, "Icon").$$render($$result, { src: RiSystemMenuUnfoldFill }, {}, {})}</label> <a${add_attribute("href", $page.url.origin, 0)} class="btn btn-ghost text-xl m-0 p-0"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.tips.gg%2Fstatic%2Fimage%2Fteams%2Ffuria-csgo.png&f=1&nofb=1&ipt=ff2c20aa053034d06aba3385fbd416052fcc652b07a30b7c9301647597c7a680&ipo=images" alt="redruby" width="40" class="m-0 p-0">
          CS2-Club</a> ${isLoggedIn ? `<a href="/dashboard/profile"><div class="avatar"><div class="ring-black ring-offset-black w-10 rounded-full ring ring-offset-1"><img${add_attribute("src", "https://joesch.moe/api/v1/" + user?.username, 0)} alt="kos"></div></div></a>` : `<a href="/login" data-svelte-h="svelte-19yni3j"><button class="btn btn-neutral">Login</button></a>`}</div></div> <div>${slots.default ? slots.default({}) : ``}</div></div> <div class="drawer-side"><label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay lg:hidden"></label>  ${posts.length > 0 ? `<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">${each(posts, (post) => {
    return `<a${add_attribute("href", "/details?post=" + post.id, 0)}><li class="flex flex-row bg-white m-2 w-full">  <img class="bg-slate-500 w-1/4 h-20 m-0 p-0 rounded-e-none object-cover" src="${"https://end.redruby.one/api/files/posts/" + escape(post.id, true) + "/" + escape(post.image, true)}"${add_attribute("alt", posts.Text, 0)}>  <p class="w-3/4">${escape(post.text)}</p></li> </a>`;
  })}</ul>` : `<p data-svelte-h="svelte-19xlwmz">No posts available. maybe if u login???</p>`}</div></div> `;
});
export {
  Layout as default
};
