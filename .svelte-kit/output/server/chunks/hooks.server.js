import { r as redirect } from "./index.js";
import PocketBase from "pocketbase";
const POCKETBASE_URL = "https://end.redruby.one";
const handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase(POCKETBASE_URL);
  event.locals.pb.authStore.loadFromCookie(
    event.request.headers.get("cookie") || ""
  );
  try {
    if (event.locals.pb.authStore.isValid) {
      await event.locals.pb.collection("users").authRefresh();
      event.locals.user = structuredClone(event.locals.pb.authStore.model);
    }
  } catch (err) {
    event.locals.pb.authStore.clear();
  }
  if (event.url.pathname.startsWith("/dashboard")) {
    if (!event.locals.user) {
      throw redirect(303, "/login");
    }
  }
  const response = await resolve(event);
  const isProd = process.env.NODE_ENV === "production" ? true : false;
  response.headers.set(
    "set-cookie",
    event.locals.pb.authStore.exportToCookie({
      secure: isProd,
      sameSite: "Lax"
    })
  );
  return response;
};
export {
  handle
};
