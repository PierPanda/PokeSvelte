<script lang="ts">
	import { recent } from '$lib/recent.svelte';
	const { data } = $props();
	const pokemons = data.pokemon;
	$inspect(pokemons);
</script>

<ul>
	{#each pokemons as pokemon, id}
		<!--{@const} permet de créer une variable qui ne sera disponible que pour le bloc actif (dans lequel on itère directement)-->
		{@const pokemonImage = pokemon.sprites.front_default}
		{@const pokemonName = pokemon.name}
		<li class:found={data.pokedex.includes(pokemon.id)} class:recent={recent.ids.includes(id)}>
			<a href="/pokedex/{id}"><img src={pokemonImage} alt={pokemonName} /></a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 5rem;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		gap: 2rem;
	}

	li {
		width: 8rem;
		height: 8rem;
		padding: 1rem;
		border-radius: 10px;
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		filter: contrast(0%) brightness(200%);
	}

	li img {
		scale: 1;
		transition: all 0.3s ease-in-out;
	}

	li img:hover {
		cursor: pointer;
		scale: 1.5;
		filter: drop-shadow(0 0 0.2rem rgba(255, 255, 255, 0.547));
	}

	.found {
		filter: none;
	}

	.recent {
		border: 1px solid black;
	}
</style>
