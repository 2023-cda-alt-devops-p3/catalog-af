<script lang="ts">
	import type { PostData } from '$lib/types';
	import { formatDate } from '$lib/utils';
	
	export let data: PostData;
</script>

<svelte:head>
<title>{data.meta.title}</title>
<meta name="description" content={data.meta.description} />
<meta property="og:type" content="article" />
<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Publié le {formatDate(data.meta.date)}</p>
	</hgroup>
	
	<div class="tags">
		{#each data.meta.categories as category}
		<a href="/categories/{category}" class="surface-4">
			{#if category === 'uml'}
			<i class="fa-solid fa-diagram-predecessor"></i>
			{:else}
			<i class="fa-solid fa-database"></i>
			{/if}
			{category}
		</a>
		{/each}
	</div>
	
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: 100%;
		margin-inline: auto;
	}
	
	h1 {
		text-transform: capitalize;
		max-inline-size: var(--size-header-3);
	}
	
	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}
	
	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-5);
		margin-bottom: var(--size-5);
	}
	
	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}

	.tags .fa-database:after, .tags .fa-diagram-predecessor:after {
			height: var(--font-size-2);
			width: var(--font-size-2);
		}
</style>
