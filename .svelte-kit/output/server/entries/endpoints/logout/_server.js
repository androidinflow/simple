import { r as redirect } from "../../../chunks/index.js";
const GET = ({ locals }) => {
  locals.pb?.authStore.clear();
  locals.user = void 0;
  throw redirect(303, "/");
};
export {
  GET
};
