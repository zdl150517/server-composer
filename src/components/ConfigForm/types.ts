import type { CpuType } from "appConstants";
import type { ServerConfig } from "hooks/useServerConfig/types";

export type ConfigFormProps = {
	handlers: {
		setCpu: (cpu: CpuType | "") => void;
		setMemory: (memory: number, hasError: boolean) => void;
		setGpu: (hasGpu: boolean) => void;
		submit: () => void;
	};
	config: ServerConfig;
};
