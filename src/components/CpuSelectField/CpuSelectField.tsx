import type { FC } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { CpuType } from "appConstants";
import type { CpuSelectFieldProps } from "./types";
export const CpuSelectField: FC<CpuSelectFieldProps> = ({
	value,
	handleCpuChange,
}) => {
	return (
		<FormControl sx={{ flexGrow: 0, minWidth: "100px" }} required>
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
