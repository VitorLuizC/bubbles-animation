export const getElement = (target: (HTMLElement | string)) => {
	const element =
		typeof target === 'string'
			? document.querySelector(target) as HTMLElement
			: target

	return element;
};
