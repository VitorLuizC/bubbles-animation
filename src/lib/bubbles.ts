import { State } from './store'
import { NumberRange, ColorRange, getColor, getNumber } from './range'

export interface Axis {
	x: number,
	y: number
};

export interface Bubble {
	position: Axis,
	size: number,
	color: {
		R: number,
		G: number,
		B: number,
		A: number
	}
};

export const createBubble = (state: State): Bubble => {
	const bubble: Bubble = {
		size: getNumber(state.size),
		color: getColor(state.color),
		position: {
			x: state.position
				? getNumber([state.position.x - state.accuracy, state.position.x + state.accuracy])
				: getNumber([0, state.width]),
			y: state.position
				? getNumber([state.position.y - state.accuracy, state.position.y + state.accuracy])
				: getNumber([0, state.height])
		}
	};

	return bubble;
};

export const createBubbles = (state: State) => {
	const length = ~~(getNumber(state.quantity));
	const bubbles = []
	for (let index = 0; index < length; index++)
		bubbles.push(createBubble(state));
	return bubbles;
}

export const drawBubble = (context: CanvasRenderingContext2D, bubble: Bubble) => {
	const { R, G, B, A } = bubble.color;
	const color = `rgba(${R}, ${G}, ${B}, ${A})`;
	context.beginPath();
	context.arc(bubble.position.x, bubble.position.y, bubble.size, 0, 2 * Math.PI);
	context.strokeStyle = color;
	context.fillStyle = color;
	context.fill();
	context.closePath();
};
