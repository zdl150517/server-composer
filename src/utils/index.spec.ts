import { isNumberPowerOfTwo } from ".";

describe("isNumberPowerOfTwo", () => {
	it("should return true for powers of two", () => {
		const powersOfTwos = [1, 2, 4, 8, 1024, 2048, 4096, 8192, 8388608];
		for (const num of powersOfTwos) {
			expect(isNumberPowerOfTwo(num)).toBe(true);
		}
	});

	it("should return false for non-powers of two", () => {
		const notPowersOfTwos = [0, 3, 5, 9, 1025, 2049, 4095, 8191, 8388607];
		for (const num of notPowersOfTwos) {
			expect(isNumberPowerOfTwo(num)).toBe(false);
		}
	});

	it("should return false for negative numbers", () => {
		expect(isNumberPowerOfTwo(-1)).toBe(false);
	});
});
