<script lang="ts">
	import WildPokemon from '$lib/composants/WildPokemon.svelte';
	import { createRandomNumber } from '$lib/helper';
	import { invalidate } from '$app/navigation';
	import { recent } from '$lib/recent.svelte';
	const { data } = $props();
	// Vérifier l'affichage des pokemon: probleme de random
	const pokemons = data.pokemons.slice(0, 10);
	$inspect(pokemons);

	let started = $derived(data.pokedex.length > 0);
	const starters = [1, 4, 7];

	let wilds: { id: number; appeared: number }[] = $state([]);
	$effect(() => {
		const updateInterva = started
			? setInterval(() => {
					wilds.push({
						id: createRandomNumber(1, data.pokemons.length + 1),
						appeared: createRandomNumber(1, data.pokemons.length + 1)
					});
				}, 2000)
			: undefined;
	});

	async function catchPokemon(id: number) {
		await fetch('api/pokedex', {
			body: JSON.stringify({ id }),
			method: 'POST'
		}); //function svelte qui permet de mettre à jour : depends('pokedex:all')
		invalidate('pokedex:all');
		recent.add(id);
	}

	function removeFromWilds(appeared: number) {
		wilds = wilds.filter((wild) => wild.appeared !== appeared);
	}
</script>

<main>
	<div class="pokemon-list">
		{#if !started}
			{#each starters as starter}
				{@const pokemon = data.pokemons[starter - 1]}
				<WildPokemon
					name={pokemon.name}
					src={pokemon.sprites.front_default}
					{catchPokemon}
					id={pokemon.id}
				/>
			{/each}
		{:else if wilds !== undefined}
			{#each wilds as wild (wild.appeared)}
				{@const randomPokemon = data.pokemons[wild.id - 1]}
				<WildPokemon
					catchPokemon={() => {
						catchPokemon(wild.id);
						removeFromWilds(wild.appeared);
					}}
					name={randomPokemon.name}
					src={randomPokemon.sprites.front_default}
					id={randomPokemon.id}
					escape={() => {
						removeFromWilds(wild.appeared);
					}}
				/>
			{/each}
		{/if}
	</div>
</main>

<style>
	main {
		width: 100vw;
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 200px;
	}

	.pokemon-list {
		display: flex;
		flex-wrap: wrap;
		margin: 25px;
	}
</style>
