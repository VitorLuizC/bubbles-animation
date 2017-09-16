<template>
	<figure class="animation-banner">
		<canvas class="animation" ref="animation" />
		<figcaption class="detail">
			<h1 class="title">Bubbles Animation</h1>
		</figcaption>
	</figure>
</template>

<script>
	import animate from '../'

	export default {
		mounted () {
			animate(this.$refs.animation, {
				color: { R: [50, 255], G: 0, B: [120, 255], A: .5 },
				interval: 3,
				accuracy: 100,
				size: [50, 100]
			});
		}
	}
</script>

<style>
	.animation-banner {
		position: relative;
		width: 100%;
		height: 300px;
	}

	.animation-banner > .animation {
		background-image: linear-gradient(rgba(150,0,175, .15), transparent);
	}

	.animation-banner > .animation {
		position: absolute;
		top: 0;
		left: 0;
		height: 0;
		width: 100%;
		height: 100%;
	}

	.animation-banner > .detail {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.animation-banner > .detail > .title {
		font-size: 4rem;
		font-weight: 100;
		text-align: center;
	}
</style>
