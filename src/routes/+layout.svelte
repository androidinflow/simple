<!-- // src/routes/+layout.svelte -->
<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { Icon } from "svelte-icons-pack";
  import { RiSystemMenuUnfoldFill } from "svelte-icons-pack/ri";
  export let data;
  $: ({ user, isLoggedIn } = data);
  const { posts } = data;
</script>

<div class="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content p-1">
    <!-- Page content here -->

    <div class="navbar bg-base-200">
      <div class="flex justify-between w-full">
        <label for="my-drawer-4" class="lg:hidden scale-150 p-2">
          <Icon src={RiSystemMenuUnfoldFill} />
        </label>
        <a href={$page.url.origin} class="btn btn-ghost text-xl m-0 p-0">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.tips.gg%2Fstatic%2Fimage%2Fteams%2Ffuria-csgo.png&f=1&nofb=1&ipt=ff2c20aa053034d06aba3385fbd416052fcc652b07a30b7c9301647597c7a680&ipo=images"
            alt="redruby"
            width="40"
            class="m-0 p-0"
          />
          CS2-Club
        </a>

        <div class="justify-center inline-flex gap-3">
          <a href="/ai">
            <button
              type="button"
              class="bg-gradient-to-r from-purple-600 to-pink-600 text-white focus-visible:outline-purple-600 dark:focus-visible:outline-purple-600 rounded-xl inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-medium tracking-wide transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                class="size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z"
                  clip-rule="evenodd"
                />
              </svg>
              Uran AI Assist
            </button>
          </a>

          {#if isLoggedIn}
            <a href="/dashboard/profile">
              <div class="avatar">
                <div
                  class="ring-black ring-offset-black w-10 rounded-full ring ring-offset-1"
                >
                  <img
                    src={"https://joesch.moe/api/v1/" + user?.username}
                    alt="kos"
                  />
                </div>
              </div>
            </a>
          {:else}
            <a href="/login">
              <button
                type="button"
                class="cursor-pointer whitespace-nowrap rounded-xl bg-green-600 px-4 py-2 text-sm font-medium tracking-wide text-white transition hover:opacity-75 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:bg-green-600 dark:text-white dark:focus-visible:outline-green-600"
                >login</button
              >
            </a>
          {/if}
        </div>
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
  <div class="drawer-side">
    <label
      for="my-drawer-4"
      aria-label="close sidebar"
      class="drawer-overlay lg:hidden"
    ></label>

    <!-- Sidebar content here -->
    {#if posts.length > 0}
      <ul class="menu bg-indigo-300 text-base-content min-h-full w-80 pr-2">
        {#each posts as post}
          <a href={"/details?post=" + post.id}>
            <li
              class="flex flex-row bg-white mb-1 w-full rounded-md rounded-e-none"
            >
              <!--<h2>Post ID: {post.id}</h2>-->
              <!-- {#if post.image} -->
              <img
                class="bg-slate-500 w-1/4 h-20 m-0 p-0 object-cover"
                src="https://end.redruby.one/api/files/posts/{post.id}/{post.image}"
                alt={posts.Text}
              />
              <!--   -->
              <p class="w-3/4">{post.text}</p>
            </li>
          </a>
        {/each}
      </ul>
    {:else}
      <p>No posts available. maybe if u login???</p>
    {/if}
  </div>
</div>

<!-- <footer class="footer bg-neutral text-neutral-content p-10">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      class="fill-current"
    >
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
      ></path>
    </svg>
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 class="footer-title">Social</h6>
    <div class="grid grid-flow-col gap-4">
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
          ></path>
        </svg>
      </a>
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
          ></path>
        </svg>
      </a>
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
          ></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
 -->
