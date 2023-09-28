<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Moon, Sun } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/theme';
</script>

<button class="toggle" on:click={toggleTheme} aria-label={$theme === 'dark' ? 'Light' : 'Dark'}>
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Sun />
			<span>Light</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Moon />
			<span>Dark</span>
		</div>
	{/if}
</button>

<style>
	.toggle {
		display: block;
		position: absolute;
		top: var(--size-7);
		right: var(--size-7);
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}

	button.toggle > * {
		display: flex;
		gap: var(--size-2);
	}

	@media (min-width: 768px) {
		button.toggle {
			display: normal;
			position:initial;
		}
	}
</style>
