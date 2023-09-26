<script lang="ts">
	export let src: string
	export let alt: string
</script>

<p class="center">
	<img {src} {alt} loading="lazy" />
</p>

<style>
	img {
		display: inline;
		border-radius: 0%;
		vertical-align: middle;
    	border-style: none;
	}
	.center {
		margin-top: var(--size-4);
		margin-bottom: var(--size-4);
		text-align: center;
	}
</style>
