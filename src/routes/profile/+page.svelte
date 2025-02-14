<script lang="typescript">
	const { data } = $props();
</script>

<div class="card">
	<div class="item-screen">
		<div class="bag">
			<div class="bag-details">
				<div class="bag-section-title">
					<h1>Dresseur</h1>
				</div>
				<div class="bag-section-image">
					<img src="src/images/0.png" alt="Avatar dresseur" />
				</div>
			</div>
			<div class="item-list">
				<ul>
					<li>
						First Name :
						<br />
						{data.firstName}
					</li>
					<li>
						Name :
						<br />
						{data.name}
					</li>
					<li>
						Àge :
						<br />
						{data.age} ans
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
	}

	.item-screen {
		border-radius: 15px;
		display: flex;
		align-content: center;
		height: auto;
		padding-top: 4px;
		margin: 10px;
		background: repeating-linear-gradient(0deg, #d68c73, #d68c73 4px, #ffad94 4px, #ffad94 8px);
		border: thick double #606060;
		border-width: 12px;
	}

	.bag {
		position: relative;
		margin-left: 12px;
		margin-right: 4px;
		margin-bottom: 8px;
		height: 436px;
		display: grid;
		grid-template-columns: 316px 568px;
		gap: 60px;
		background-image: url(/src/images/ui-background.png);
	}

	.bag-section-image {
		height: 200px;
		width: 300px;
		padding: 20px;
	}

	.bag-section-image img {
		width: 232px;
		filter: drop-shadow(2px 2px 2px lightgrey);
	}

	.bag-section-title {
		padding-left: 24px;
		padding-right: 16px;
		padding-top: 28px;
		width: 280px;
		height: 98px;
		text-align: center;
		color: #606060;
		text-shadow: 4px 4px 0 #ffffff;
	}

	.item-list {
		display: flex;
		flex-direction: column;
		column-gap: 10px;
		margin-top: 32px;
		color: #606060;
		text-shadow: 4px 1px 0 #d0d0c8;
		overflow-y: scroll;
		width: 540px;
	}

	.item-list ul {
		position: relative;
		list-style: none;
		margin-top: 4rem;
	}

	.item-list li {
		font-size: 1.5rem;
		position: relative;
		padding-left: 1rem;
		text-indent: -1rem;
		margin-bottom: 1rem;
		line-height: 2.25rem;
	}

	.item-list li::after {
		display: block;
		height: 8px;
		width: 50%;
		content: '';
		background: repeating-linear-gradient(
			to right,
			#efe7ad,
			#efe7ad 24px,
			#efe7ad 24px,
			#ffffce 24px,
			#ffffce 32px
		);
	}
</style>
