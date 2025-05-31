import type { CpuType } from "appConstants";
import type { ServerConfig } from "hooks/useServerConfig/types";

export type ConfigFormProps = {
	handlers: {
		setCpu: (cpu: CpuType | "") => void;
		setMemory: (memory: number) => void;
		setGpu: (hasGpu: boolean) => void;
		submit: () => void;
	};
	config: ServerConfig;
};
