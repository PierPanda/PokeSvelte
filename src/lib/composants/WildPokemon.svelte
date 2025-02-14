<script lang="ts">
	import { onMount } from 'svelte';
	import { createRandomNumber } from '$lib/helper';

	type PokemonProps = {
		name: string;
		src?: string;
		catchPokemon: (id: number) => void;
		escape?: () => void;
		id: number;
	};
	const { name, src, catchPokemon, escape, id }: PokemonProps = $props();

	onMount(() => {
		const timeOut = escape ? setTimeout(escape, createRandomNumber(2, 10) * 1000) : undefined;
		return () => clearTimeout(timeOut);
	});
</script>

<div class="Pokemon">
	<button
		class="wild"
		class:random={escape}
		style="top: {createRandomNumber(1, 100)}%; left: {createRandomNumber(1, 100)}%"
		onclick={() => catchPokemon(id)}
		aria-label="Catch Pokémon: {name}"
	>
		<img {src} alt={name} style="width: {createRandomNumber(100, 200)}px" />
	</button>
</div>

<style>
	img {
		cursor: pointer;
		width: 150px;
		height: auto;
	}

	button {
		background-color: transparent;
		border: none;
	}

	.random {
		position: fixed;
	}
</style>
