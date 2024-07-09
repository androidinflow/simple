<script>
  export let data;
  $: ({ user, isLoggedIn } = data);
  const { posts } = data;
  console.log(posts);
</script>

<h1 class="text-3xl font-bold underline text-red-400">Hello world!</h1>

{#if isLoggedIn}
  <h2>Welcome {user?.username}</h2>
  <h3>{data.user.email}</h3>

  <a href="/logout">
    <button>Logout</button>
  </a>
{:else}
  <a href="/login">
    <button>Login using Github</button>
  </a>
{/if}

<h1>Posts</h1>

{#if posts.length > 0}
  <ul>
    {#each posts as post}
      <li>
        <h2>Post ID: {post.id}</h2>
        <p>{post.text}</p>
        {#if post.image}
          <img
            width="400px"
            src="https://end.redruby.one/api/files/posts/{post.id}/{post.image}"
            alt={posts.Text}
          />
        {/if}
      </li>
    {/each}
  </ul>
{:else}
  <p>No posts available.</p>
{/if}
