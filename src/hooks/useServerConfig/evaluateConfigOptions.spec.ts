import { evaluateConfigOptions } from "./evaluateConfigOptions";
import { CpuType, ServerModels } from "appConstants";

describe("evaluateConfigOptions", () => {
	describe("can pass cases for rule 1", () => {
		it("can pass provided Example 4 and return High Density only", () => {
			const config = {
				cpu: CpuType.ARM,
				memorySize: 524288,
				hasGpuAccelerator: true,
			};
			const result = evaluateConfigOptions(config);
			expect(result).toEqual([ServerModels.HighDensityServer]);
		});

		it("returns 'No Options' due to not enough memory", () => {
			const config = {
				cpu: CpuType.ARM,
				memorySize: 262144,
				hasGpuAccelerator: true,
			};
			expect(evaluateConfigOptions(config)).toBe("No Options");
		});

		it("returns 'No Options' due to incorrect CPU type", () => {
			const config = {
				cpu: CpuType.POWER,
				memorySize: 524288,
				hasGpuAccelerator: true,
			};
			expect(evaluateConfigOptions(config)).toBe("No Options");
		});
	});

	describe("can pass cases for rule 2", () => {
		it("returns Mainframe and Tower Server because of CPU type and small memory size", () => {
			const config = {
				cpu: CpuType.POWER,
				memorySize: 65536,
				hasGpuAccelerator: false,
			};
			const result = evaluateConfigOptions(config);
			expect(result).toEqual(
				expect.arrayContaining([
					ServerModels.MainFrame,
					ServerModels.TowerServer,
				]),
			);
			expect(result).toHaveLength(2);
		});

		it("returns Tower, Rack, and Mainframe because of CPU type and large memory size", () => {
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
	});

	describe("can pass cases for rule 3", () => {
		it("returns both Tower and Rack because having enough memory size", () => {
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

		it("returns only Tower Server because not having enough memory size for rack", () => {
			const config = {
				cpu: CpuType.X86,
				memorySize: 4096,
				hasGpuAccelerator: false,
			};
			const result = evaluateConfigOptions(config);
			expect(result).toEqual([ServerModels.TowerServer]);
		});
	});

	describe("can pass cases for rule 4", () => {
		it("returns 'No Options' because memory size below threshold", () => {
			const config = {
				cpu: CpuType.POWER,
				memorySize: 1024,
				hasGpuAccelerator: false,
			};
			expect(evaluateConfigOptions(config)).toBe("No Options");
		});
	});
});
