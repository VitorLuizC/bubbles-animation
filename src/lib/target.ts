export type Target = (string | HTMLCanvasElement);

export default (target: Target) => {
	const element =
		typeof target === 'string'
			? document.querySelector(target)
			: target

	if (!(element instanceof HTMLCanvasElement))
		throw 'target is not a <canvas />'

	return element
}
