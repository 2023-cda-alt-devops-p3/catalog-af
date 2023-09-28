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
			<a href="/categories/uml">
				<i class="fa-solid fa-diagram-predecessor"></i>
				UML
			</a>
		</li>
		<li>
			<a href="/categories/merise">
				<i class="fa-solid fa-database"></i>
				Merise
			</a>
		</li>
	</ul>
	
	<Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}
	
	.links {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		gap: var(--size-5);
		margin-block: var(--size-7);
		font-size: var(--size-7);
	}
	
	.links .fa-solid {
		height: var(--font-size-6);
		width: var(--font-size-6);
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
			gap: var(--size-7);
			margin-block: 0;
			font-size: var(--size-3);
		}
		
		.links .fa-solid {
			height: var(--font-size-2);
			width: var(--font-size-2);
		}
	}
</style>
