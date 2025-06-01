import { type FC, useState } from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import type { GpuToggleFieldProps } from "./types";

export const GpuToggleField: FC<GpuToggleFieldProps> = ({
	value = false,
	handleGpuToggleChange,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleGpuToggleChange(event.target.checked);
	};

	return (
		<FormControlLabel
			sx={{ flexGrow: 0 }}
			control={<Checkbox checked={value} onChange={handleChange} />}
			label={<Typography noWrap>GPU Accelerator Card</Typography>}
		/>
	);
};
