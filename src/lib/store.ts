import { Options } from '../';
import { Bubble, Axis, createBubbles, drawBubble } from './bubbles'
import { NumberRange, ColorRange } from './range'

export interface State {
	isSkiping: boolean,
	ticks: number,
	interval: number,
	waiting?: number,
	bubbles: Bubble[],
	width: number,
	height: number,
	quantity: NumberRange,
	size: NumberRange,
	color: ColorRange
};

export const createState = (options: Options): State => ({
	isSkiping: false,
	ticks: 0,
	interval: 1,
	bubbles: [],
	width: 0,
	height: 0,
	size: [50, 100],
	quantity: 1,
	color: { R: [0, 255], G: [0, 255], B: [0, 255], A: .5 },
	...options
});

export const actions = {
	countTickets: (state: State) => {
		state.isSkiping = state.ticks <= state.interval;
		state.ticks = state.isSkiping
			? state.ticks + 1
			: 0;
	},
	changeBubbles: (state: State, context: CanvasRenderingContext2D) => {
		const bubbles = state.isSkiping
			? state.bubbles
			: state.bubbles.concat(createBubbles(state));
		context.clearRect(0, 0, state.width, state.height);
		state.bubbles = bubbles.map((bubble) => {
			bubble.color.A = bubble.color.A - .015;
			drawBubble(context, bubble);
			return bubble;
		})
		.filter(bubble => bubble.color.A >= 0);

	},
	changeSize: (state: State, { width, height }: { width: number, height: number}) => {
		state.width = width;
		state.height = height;
	}
};
