<script lang="ts">
	import Loader from './loader.svelte';

	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data: { posts: Promise<Post[]> };

	// Assuming data.posts is an array of Post objects
	data.posts = Promise.resolve(data.posts);
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	{#await data.posts}
	<Loader />
	{:then posts}
	<ul class="posts">
		{#each posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
	{/await}
</section>

<style>
	.posts {
		display: grid;
		gap: 2rem;
	}

	.post {
		max-inline-size: 100%;
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
</style>
