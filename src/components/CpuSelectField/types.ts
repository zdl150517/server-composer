export type CpuSelectFieldProps = {
	value?: CpuType;
	handleCpuChange: (cpu: string) => void;
};

export enum CpuType {
	X86 = "X86",
	POWER = "Power",
	ARM = "ARM",
}
