import type { FC } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { type CpuSelectFieldProps, CpuType } from "./types";
export const CpuSelectField: FC<CpuSelectFieldProps> = ({
	value = CpuType.POWER,
	handleCpuChange,
}) => {
	return (
		<FormControl sx={{ flexGrow: 1 }} fullWidth required>
			<InputLabel id="cpu-models">CPU</InputLabel>
			<Select
				labelId="cpu-models"
				id="cpu-select"
				value={value}
				label="CPU"
				onChange={(e) => handleCpuChange(e.target.value)}
			>
				<MenuItem value={CpuType.ARM}>ARM</MenuItem>
				<MenuItem value={CpuType.X86}>X86</MenuItem>
				<MenuItem value={CpuType.POWER}>Power</MenuItem>
			</Select>
		</FormControl>
	);
};
