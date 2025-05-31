import type { CpuType } from "appConstants";
export type CpuSelectFieldProps = {
	value: CpuType | "";
	handleCpuChange: (cpu: CpuType | "") => void;
};
