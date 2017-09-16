<template>
	<canvas ref="animation" />
</template>

<script>
	import animate from '../'

	export default {
		mounted () {
			animate(this.$refs.animation, {
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
	@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:100,300,500');

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
</style>
