import { type FC, useState } from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import type { GpuToggleFieldProps } from "./types";

export const GpuToggleField: FC<GpuToggleFieldProps> = ({
	value = false,
	handleGpuToggleChange,
}) => {
	const [checked, setChecked] = useState(value);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
		handleGpuToggleChange(event.target.checked);
	};

	return (
		<FormControlLabel
			sx={{ flexGrow: 0 }}
			control={<Checkbox checked={checked} onChange={handleChange} />}
			label={<Typography noWrap>GPU Accelerator Card</Typography>}
		/>
	);
};
