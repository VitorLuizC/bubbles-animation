<template>
	<main class="documentation-container">
		<animation-banner />

		<section class="documentation-block">
			<figure class="example -absolute">
				<canvas ref="example1" class="animation" />
			</figure>

			<article class="about">
				<p>
					<strong>Bubbles Animation</strong> is a simple lib to let you use this
					nice animation inside any application.
				</p>
			</article>
		</section>

	</main>
</template>

<script>
	import animate from '../'
	import AnimationBanner from './AnimationBanner'

	export default {
		components: { AnimationBanner },
		mounted () {
			animate(this.$refs.example1, {
				interval: 3,
				quantity: 1,
				color: { R: 0, G: [125, 255], B: [125, 255], A: .65 },
				accuracy: 20,
				size: [5, 50]
			});
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:100,400');

	/**
	 * Reset browsers default styles.
	 */
	html,
	body { height: 100%; }

	body {
		font-family: 'Josefin Sans', sans-serif;
		font-weight: 300;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	/**
	 * Documentation component.
	 */
	.documentation-container {
		height: 100%;
	}

	.documentation-block {
		padding: 1.5rem;
	}

	.documentation-block > .example {
		width: 11.25rem;
		height: 11.25rem;
		box-shadow: 0 0 10px rgba(0,0,0, .25);
	}
</style>
