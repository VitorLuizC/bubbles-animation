<template>
	<section class="animation-container">
		<canvas ref="animation" class="animation" />
	</section>
</template>

<script>
	import animate from '../'

	export default {
		mounted () {
			animate(this.$refs.animation)
		}
	}
</script>

<style>
	html,
	body { height: 100%; }

	body { margin: 0; }

	.animation-container { height: 100%; }
</style>
