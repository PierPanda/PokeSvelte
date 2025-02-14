import { json } from '@sveltejs/kit';
import { read, write } from '$lib/io';

export async function GET() {
	// const data = await read('pokedex.json');
	// return json(data);
	// Equivalent sans 'async/await':
	return read('pokedex')
		.then((data) => json(data))
		.catch(() => []);
}

export async function POST({ request }) {
	const payload = await request.json();
	const data = await read('pokedex.json').catch(() => []);
	data.push(payload.id);
	await write('pokedex.json', data);
	return json(data);
}
