import { type FC, useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { isNumberPowerOfTwo } from "../../utils";

import type { MemoryInputFieldProps } from "./types";

const muiTextFieldProps = {
	sx: { flexGrow: 1 },
	label: "Memory Size",
	id: "memory-size",
	fullWidth: true,
	slotProps: {
		input: {
			endAdornment: <InputAdornment position="start">MB</InputAdornment>,
		},
	},
};

export const getMemorySizeErrorReason = (size: number): string | undefined => {
	if (!Number.isInteger(size) || Number.isNaN(size)) {
		return "Memory size format incorrect.";
	}

	if (size < 4096 || size > 8388608) {
		return "Memory size out of range. The range of this attribute is 4,096MB (included)-8,388,608MB (included).";
	}

	if (!isNumberPowerOfTwo(size)) {
		return "Memory size must be a power of two.";
	}

	return;
};

export const MemoryInputField: FC<MemoryInputFieldProps> = ({
	value = 4096,
	handleMemorySizeChange,
}) => {
	const [memorySize, setMemorySize] = useState(value);
	const helperText = getMemorySizeErrorReason(memorySize);

	return (
		<NumericFormat
			allowNegative={false}
			customInput={TextField}
			decimalScale={0}
			error={!!helperText}
			helperText={helperText}
			onValueChange={({ floatValue }) => {
				if (!floatValue) {
					return;
				}

				setMemorySize(floatValue);
				handleMemorySizeChange(floatValue);
			}}
			required
			thousandSeparator
			value={memorySize}
			{...muiTextFieldProps}
		/>
	);
};
