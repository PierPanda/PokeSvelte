import pokemon from '$lib/pokemons.json'; //Import du fichier pokemons.json pour accéder aux données

export function load({ params }) {
	// Return permet de donner acces aux données de la page server à la pagee svelte (c'est la props) accessible avec data
	// id est une dépendance de la function load (la function est rejoué)
	const id = parseInt(params.id);
	const currentPokemon = pokemon[id];

	return currentPokemon;
}
