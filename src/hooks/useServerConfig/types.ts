import type { ServerModels, NO_OPTION, CpuType } from "appConstants";

export type Action =
	| { type: "SET_CPU"; payload: CpuType | "" }
	| {
			type: "SET_MEMORY";
			payload: {
				value: number;
				hasError: boolean;
			};
	  }
	| { type: "SET_GPU"; payload: boolean }
	| { type: "SUBMIT" };

export type ServerConfig = {
	cpu: CpuType | "";
	memorySize: number;
	hasGpuAccelerator: boolean;
	hasError?: boolean;
};

export type State = {
	config: ServerConfig;
	results: ServerModels[] | NO_OPTION;
};
