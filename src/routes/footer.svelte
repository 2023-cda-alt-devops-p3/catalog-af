<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<p>
		🎓 {config.title} &copy {new Date().getFullYear()} &bull;
		<a href="https://github.com/arnaudfl">👽 arnaudfl</a>
	</p>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
	}

	footer a {
		color: inherit;
	}

	p {
		color: var(--text-2);
	}
</style>
