<script>
  export let data;
  $: ({ user, isLoggedIn } = data);
  const { posts } = data;
  console.log(data.user.email);
</script>

<h1 class="text-3xl font-bold underline text-red-400">RED RUBY</h1>
<img
  src="https://gordonmax.com/wp-content/uploads/2020/06/red_emerald.jpg"
  width="100"
  height="100"
  alt="red-ruby"
/>

{#if isLoggedIn}
  <h2>Welcome {user?.username}</h2>
  <h3>{data.user.email}</h3>

  <a href="/logout">
    <button class="btn btn-neutral">Logout</button>
  </a>
{:else}
  <a href="/login">
    <button class="btn btn-neutral">Login</button>
  </a>
{/if}

{#if posts.length > 0}
  <ul>
    {#each posts as post}
      <h1>Posts</h1>
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
  <p>No posts available. maybe if u log in?</p>
{/if}
