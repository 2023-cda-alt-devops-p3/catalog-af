<script lang="ts">
	import Loader from './loader.svelte';

	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import { Divide } from 'lucide-svelte';

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
		<div class="cards">
			{#each posts as post}
				<div class="card">
					<div class="cover"></div>
					<h5><a href={post.slug}>{post.title}</a></h5>
					<p class="date">{formatDate(post.date)}</p>
					<p class="description">{post.description}</p>
				</div>
			{/each}
		</div>
	{/await}
</section>

<style>
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
	background-image: url('./cover.jpg');
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
</style>
