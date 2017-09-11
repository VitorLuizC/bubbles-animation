export interface State {
	isMoving: boolean,
	waiting: number,
	bubbles: Array<any>
}

export const createState = (): State => {
	const state: State = {
		isMoving: false,
		bubbles: [],
		waiting: null
	};

	return state;
}

export const move = (state: State, x: number, y: number): void => {
	state.isMoving = true;
	if (state.waiting)
		clearTimeout(state.waiting)
	state.waiting = setTimeout(() => {
		state.isMoving = false
	}, 1000)
}
