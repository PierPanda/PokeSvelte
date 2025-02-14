import { read } from '$lib/io';

// La fonction load permet au server de communiquer de la donnée à la page a travers une propriété data.props()
export async function load({ depends }) {
	depends('pokedex:all');
	const pokedex = await read('pokedex.json').catch(() => []);
	// On va retourner de la donnée dans le layout pour pouvoir l'afficher dans la navbar sur chasque page (navbar étant dans le layout)
	return {
		pokedex: pokedex,
		teamSize: pokedex.length
	};
}
