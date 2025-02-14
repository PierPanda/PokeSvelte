<script lang="ts">
	type PokemonProps = {
		name: string;
		id: number;
		src?: string;
		found: boolean;
		recent: boolean;
	};
	const { name, id, src, found = false, recent = false }: PokemonProps = $props();
</script>

<div class="Pokemon" class:found class:recent>
	<img {src} alt={name} />
	<p>N°{id}</p>
	<h1>{name}</h1>
</div>

<style>
	.Pokemon {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 15rem;
		margin: auto;
	}
	p {
		margin: 0;
		font-size: 1.5rem;
		text-transform: capitalize;
	}
	img {
		height: 20rem;
		object-fit: cover;
		filter: contrast(0%) brightness(200%);
	}
	.found img {
		filter: none;
	}
</style>
