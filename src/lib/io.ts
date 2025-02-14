import { readFile, writeFile } from 'fs/promises'; // From node.js

// Read JSON files
export async function read(path: string) {
	const json = (await readFile('data/' + path)).toString();
	const data = JSON.parse(json);
	return data;
}

// Write JSON files
export async function write(path: string, data: unknown) {
	const s = JSON.stringify(data);
	await writeFile('data/' + path, s);
}
