import { getElement } from './lib/DOM';
import { createState, State, move } from './lib/store';

const animate = (target: (string | HTMLCanvasElement)): void => {
	const element = getElement(target) as HTMLCanvasElement;
	const context = element.getContext('2d');
	const state = createState();

	const run = (state: State) => () => {
		requestAnimationFrame(run(animation(state)))
	};

	run(state);

	resize(element);

	window.addEventListener('resize', () => resize(element));
	window.addEventListener('mousemove', ({ clientX: x, clientY: y }) => move(state, x, y));
};

// const animate = (selector, animation) => {
//   const element = document.querySelector(selector)
//   const context = element.getContext('2d')
//   const run = (state) => () => {
//     const next = animation(context, element, state)
//     requestAnimationFrame(run(next))
//   }

//   window.addEventListener('resize', () => resize(element))
//   resize(element)

//   requestAnimationFrame(run())
// }

export default animate;

const resize = (element: HTMLCanvasElement): void => {
	const parent = element.parentElement;
	element.width = parent.clientWidth;
	element.height = parent.clientHeight;
}

const animation = (state: State): State => {
	return state;
}

// const animation = (context, parent, state) => {
//   state = state || { blocks: [], next: 0 }
//   context.clearRect(0, 0, parent.width, parent.height)

//   const generate = state.next === 0 || (state.next !== 0 && state.blocks.length < 10)

//   state.blocks = (generate ? [ ...state.blocks, generateBlock(parent) ] : state.blocks)
//     .map(block => {
//       context.beginPath()
//       context.arc(block.pos.x, block.pos.y, block.size, 0, 2 * Math.PI)
//       context.strokeStyle = color.parse(block.color)
//       context.fillStyle = color.parse(block.color)
//       context.fill()
//       context.closePath()
//       block.color.alpha += -.015
//       block.size += .25
//       return block
//     })
//     .filter(block => block.color.alpha > 0)
//   return state
// }

// const random = (max, min = 0) => ~~(Math.random() * (max - min) + min)
// let moved = false
// let waiting = null
// const position = {
//   x: 0,
//   y: 0
// };

// const color = {
//   generate: () => ({
//     red: random(255, 75),
//     green: 0,
//     blue: random(255, 75),
//     alpha: .75
//   }),
//   parse: ({ red, green, blue, alpha }) => {
//     return `rgba(${red}, ${green}, ${blue}, ${alpha})`
//   }
// }

// const generateBlock = (parent) => ({
//   color: color.generate(),
//   size: random(100),
//   pos: {
//     x: moved ? random(position.x - 100, position.x + 100) : random(parent.width),
//     y: moved ? random(position.y - 100, position.y + 100) : random(parent.height)
//   }
// })

