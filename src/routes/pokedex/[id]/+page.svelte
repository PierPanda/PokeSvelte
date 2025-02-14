<script lang="ts">
	import Pokemon from '$lib/composants/Pokemon.svelte';
	import { recent } from '$lib/recent.svelte.js';
	const { data } = $props();

	const { name, id, sprites, pokedex } = $derived(data);
	const found = $derived(pokedex.includes(id));
</script>

<Pokemon {name} {id} src={sprites.front_default} {found} recent={recent.ids.includes(id)} />
