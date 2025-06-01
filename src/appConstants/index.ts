export enum ServerModels {
	TowerServer = "Tower Server",
	RackServer4U = "4U Rack Server",
	MainFrame = "Mainframe",
	HighDensityServer = "High Density Server",
}

export type NO_OPTION = "No Options";

export enum CpuType {
	X86 = "X86",
	POWER = "Power",
	ARM = "ARM",
}

export const MIN_MEMORY_SIZE = 4096
export const MAX_MEMORY_SIZE = 8388608