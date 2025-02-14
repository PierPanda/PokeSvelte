<script lang="typescript">
</script>

<main>
	<div class="equipe">
		<h1>Equipe</h1>
	</div>

	<div class="equipe-active">
		<h1>Equipe active</h1>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}

	.equipe {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid black;
		padding: 10px;
		width: 60vw;
		height: 80vh;
	}

	.equipe-active {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 2px solid black;
		padding: 10px;
		width: 20vw;
		height: auto;
		height: 80vh;
	}
</style>
