<script lang="ts">
	import img_cover from '$lib/images/cover.jpg'
	
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	
	export let data: { postsFiltered: Post[]; category: string };
	const category = data.category.toUpperCase();
</script>

<svelte:head>
<title>{config.title}</title>
<meta name="description" content={config.description} />
</svelte:head>

<!-- Posts -->
<section>
	<h2 class="category">
		{#if category === 'UML'}
		<i class="fa-solid fa-diagram-predecessor"></i>
		{:else}
		<i class="fa-solid fa-database"></i>
		{/if}
		{category}
	</h2>
	<div class="cards">
		{#each data.postsFiltered as post}
		<div class="card">
			<div class="cover" style="background-image: url({img_cover});"></div>
			<h5><a href=/{post.slug}>{post.title}</a></h5>
			<p class="date">{formatDate(post.date)}</p>
			<p class="description">{post.description}</p>
		</div>
		{/each}
	</div>
</section>

<style>
	.category {
		padding: var(--size-8);
		text-align: center;
	}
	.cards {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		max-inline-size: calc(var(--size-content-2) * 4);
		gap: var(--size-5);
		padding: var(--size-5);
	}
	
	.card {
		position: relative;
		flex-basis: var(--size-content-2);
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		background: var(--surface-3);
		border: 1px solid var(--surface-1);
		padding: var(--size-4);
		border-radius: var(--radius-3);
		box-shadow: var(--shadow-2);
		padding-top: 110px;
	}
	
	.card .cover {
		position: absolute;
		top:0;
		left:0;
		height: 100px;
		width: 100%;
		background-repeat: no-repeat;
		flex-shrink: 0;
		border-radius: 1rem 1rem 0 0;
	}
	
	.card > h5 {
		line-height: var(--font-lineheight-1);
	}
	
	.cards::after {
		content: "";
		flex: auto;
	} 
	
	.date {
		color: var(--text-2);
	}
	
	.description {
		margin-top: var(--size-3);
	}

	@media (min-width: 768px) {
		.category {
			text-align: left;
		}
	}
</style>
