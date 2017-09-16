export type NumberRange = ([number, number] | number);

export interface ColorRange {
	R: NumberRange,
	G: NumberRange,
	B: NumberRange,
	A: NumberRange
};

export const getNumber = (range: NumberRange): number => {
	const number = Array.isArray(range)
		? Math.random() * (range[1] - range[0]) + range[0]
		: range
	return number;
};

export const getColor = ({ R, G, B, A }: ColorRange) => {
	const color = {
		R: ~~(getNumber(R)),
		G: ~~(getNumber(G)),
		B: ~~(getNumber(B)),
		A: getNumber(A)
	};
	return color;
};
