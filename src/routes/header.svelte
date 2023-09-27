<script lang="ts">
	import * as config from '$lib/config';
	import Toggle from './toggle.svelte';
</script>

<nav>
	<a href="/" class="title">
		<b>🎓 {config.title}</b>
	</a>

	<ul class="links">
		<li>
			<i class="fa-solid fa-diagram-predecessor"></i>
			<a href="/categories/uml">UML</a>
		</li>
		<li>
			<i class="fa-solid fa-database"></i>
			<a href="/categories/merise">Merise</a>
		</li>
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
