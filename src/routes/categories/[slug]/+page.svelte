<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data: { postsFiltered: Post[], category: string };
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
    <h2 class="tags">
        <span class="surface-4 category">Catégorie :</span>
		<a href="/categories/{data.category}" class="surface-4">&num;{data.category}</a>
	</h2>
	<ul class="posts">
		{#each data.postsFiltered as post}
			<li class="post">
				<a href=/{post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
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
