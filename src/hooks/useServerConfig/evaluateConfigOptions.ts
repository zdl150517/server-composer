import type { ServerConfig } from "./types";
import { CpuType, ServerModels, type NO_OPTION } from "appConstants";

const NO_OPTIONS = "No Options";

export const evaluateConfigOptions = (
	config: ServerConfig,
): ServerModels[] | NO_OPTION => {
	const { cpu, memorySize, hasGpuAccelerator } = config;

	const availableModels = [
		ServerModels.HighDensityServer,
		ServerModels.MainFrame,
		ServerModels.RackServer4U,
		ServerModels.TowerServer,
	];

	// Assuming we do not allow any model by default, instead of allowing while not prohibited, which
	// cause conflict for the example 3 result and rule 1.
	let options = new Set<ServerModels>();

	// Rule 1:
	// When select GPU Accelerator Card, only High Density Server would be available.
	// And the memory must be greater or equal to 524,288MB. And CPU must be ARM.
	if (hasGpuAccelerator) {
		if (cpu === CpuType.ARM && memorySize >= 524288) {
			return [ServerModels.HighDensityServer];
		}

		return NO_OPTIONS;
	}

	// Rule 2:
	// Mainframe can only build with Power CPU, memory size limitation is applied on
	// Rule 4. And Power CPU can build other Server Models except High Density.
	if (cpu === CpuType.POWER) {
		const models = availableModels.filter(
			(model) => model !== ServerModels.HighDensityServer,
		);

		options = new Set<ServerModels>(models);
	} else {
		options.delete(ServerModels.MainFrame);
	}

	// Rule 3:
	// Memory size greater or equal to 131,072MB can be both 4U Rack Server and
	// Tower Server. Lower than that can only be Tower Server.
	if (memorySize >= 131072) {
		options.add(ServerModels.RackServer4U);
		options.add(ServerModels.TowerServer);
	} else {
		options.add(ServerModels.TowerServer);
		options.delete(ServerModels.RackServer4U);
	}

	// Rule 4:
	// Any Model must not have a lower than 2,048MB memory. Lower than that would be “No Options”.
	if (memorySize < 2048) {
		return NO_OPTIONS;
	}

	// Rule 5:
	// If there is no Server Model match the input, need to show “No Options”
	if (options.size === 0) {
		return NO_OPTIONS;
	}

	return Array.from(options);
};
