import pokemon from '$lib/pokemons.json'; //Import du fichier pokemons.json pour accéder aux données

export function load() {
  // Return permet de donner acces aux données de la page server à la pagee svelte (c'est la props) accessible avec data
  return {
    pokemon
  }
}
