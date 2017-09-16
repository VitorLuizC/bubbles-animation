import getTarget, { Target } from './lib/target';
import { createState, actions, State } from './lib/store';
import { NumberRange, ColorRange } from './lib/range'
import { drawBubble } from './lib/bubbles';

const run = window.requestAnimationFrame;

const animate = (context: CanvasRenderingContext2D, state: State) => run(() => {
	actions.changeBubbles(state, context);
	actions.countTickets(state);
	return animate(context, state);
});

const resize = (element: HTMLCanvasElement, state: State) => {
	const { clientWidth: width, clientHeight: height } = element.parentElement
	element.width = width;
	element.height = height;
	actions.changeSize(state, { width, height });
};

export interface Options {
	interval?: number,
	quantity?: NumberRange,
	accuracy?: number,
	size?: NumberRange,
	color?: ColorRange
};

export default (target: Target, options: Options) => {
	const element = getTarget(target);
	const context = element.getContext('2d');
	const state = createState(options);

	resize(element, state);
	animate(context, state);

	window.addEventListener('resize', () => resize(element, state));
	window.addEventListener('mousemove', (event) => {
		const { top, left, width, height } = element.getBoundingClientRect();
		const { clientX: x, clientY: y } = event;
		const isOver = y >= top && y <= top + height && x >= left && x <= left + width;
		if (isOver) actions.changePosition(state, x, y);
	});
};
