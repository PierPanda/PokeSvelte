<script lang="ts">
	// On importe les informations de la page depuis le store
	import { page } from '$app/state';
	import { recent } from '$lib/recent.svelte.js';
	import { onMount } from 'svelte';
	const { children, data } = $props();
	$inspect(page.url.pathname);
	$inspect(data);
	// derived permet de faire répéter le script quand il est appelé
	const active = $derived(page.url.pathname);

	//Pas bonne pratique (faille sécu)
	// onMount(() => {
	// 	pokedex.set(data.pokedex);
	// });
</script>

<header>
	<a href="/">
		<img src="src/images/logo.png" alt="logo" class="logo" />
	</a>

	<nav>
		<!-- Synthaxe svelte = class:active permet d'appliquer la class active seulement si le contenu des acolades est true -->
		<a href="/" class:active={active === '/'}>Home</a>
		<a href="/pokedex" class:active={active === '/pokedex'}>Pokedex {data.pokedex.length}</a>
		<a href="/equipe" class:active={active === '/equipe'}>Equipe {data.teamSize}</a>
		<a href="/profile" class:active={active === '/profile'}>Profile</a>
		<a href="/a-propos" class:active={active === '/a-propos'}>À propos</a>
	</nav>
</header>

<main>
	<!-- On affiche le contenue de chaque page "enfant" -->
	{@render children()}
</main>

<footer>
	<p>©2024 Pierre Panda</p>
</footer>

<style>
	@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);

	:global(body) {
		background-color: #c3cfa1;
		font-family: 'Press Start 2P', system-ui;
		width: 100vw;
	}

	header {
		/* position: fixed; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 10px;
		padding-right: 20px;
	}

	main {
		top: 100px;
		min-height: 90vh;
	}

	footer {
		font-size: smaller;
		margin: 25px;
		padding: 0;
		text-align: center;
	}

	.logo {
		width: 3.5rem;
	}

	nav {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		background-color: transparent;
	}

	.active {
		color: grey;
		text-shadow: 2px 2px 0 #ffffff;
	}

	a {
		font-size: large;
		text-decoration: none;
		color: black;
		padding: 10px;
	}
</style>
