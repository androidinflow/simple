<script>
  export let data;
  const { posts } = data;
  console.log(data);
</script>

<h2>{data.user.email}</h2>

<h1>Posts</h1>

{#if posts.length > 0}
  <ul>
    {#each posts as post}
      <li>
        <h2>Post ID: {post.id}</h2>
        <p>{post.text}</p>
        {#if post.image}
          <img src={post.image} alt="Post Image" />
        {/if}
      </li>
    {/each}
  </ul>
{:else}
  <p>No posts available.</p>
{/if}
