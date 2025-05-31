import { evaluateConfigOptions } from "./evaluateConfigOptions";
import { CpuType, ServerModels } from "appConstants";

describe("evaluateConfigOptions", () => {
	it("can pass Example 1: Power CPU, 1024MB, No GPU -> No Options", () => {
		const config = {
			cpu: CpuType.POWER,
			memorySize: 1024,
			hasGpuAccelerator: false,
		};
		expect(evaluateConfigOptions(config)).toBe("No Options");
	});

	it("can pass Example 2: Power CPU, 262144MB, No GPU -> Tower, Rack, Mainframe", () => {
		const config = {
			cpu: CpuType.POWER,
			memorySize: 262144,
			hasGpuAccelerator: false,
		};
		const result = evaluateConfigOptions(config);
		expect(result).toEqual(
			expect.arrayContaining([
				ServerModels.TowerServer,
				ServerModels.RackServer4U,
				ServerModels.MainFrame,
			]),
		);
		expect(result).toHaveLength(3);
	});

	it("can pass Example 3: X86 CPU, 524288MB, No GPU -> Tower, Rack", () => {
		const config = {
			cpu: CpuType.X86,
			memorySize: 524288,
			hasGpuAccelerator: false,
		};
		const result = evaluateConfigOptions(config);
		expect(result).toEqual(
			expect.arrayContaining([
				ServerModels.TowerServer,
				ServerModels.RackServer4U,
			]),
		);
		expect(result).toHaveLength(2);
	});

	it("can pass Example 4: ARM CPU, 524288MB, With GPU -> High Density only", () => {
		const config = {
			cpu: CpuType.ARM,
			memorySize: 524288,
			hasGpuAccelerator: true,
		};
		const result = evaluateConfigOptions(config);
		expect(result).toEqual([ServerModels.HighDensityServer]);
	});
});
