export const isNumberPowerOfTwo = (num: number) =>
	Number.isInteger(num) && num > 0 && (num & (num - 1)) === 0;
