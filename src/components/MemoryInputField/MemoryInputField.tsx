import { type FC, useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { isNumberPowerOfTwo } from "../../utils";

import type { MemoryInputFieldProps } from "./types";

const muiTextFieldProps = {
	sx: { flexGrow: 1, width: "300px" },
	label: "Memory Size",
	id: "memory-size",
	required: true,
	fullWidth: true,
	slotProps: {
		input: {
			endAdornment: <InputAdornment position="end">MB</InputAdornment>,
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
	value,
	handleMemorySizeChange,
}) => {
	const [helperText, setHelperText] = useState<string | undefined>(
		value !== undefined ? getMemorySizeErrorReason(value) : undefined,
	);

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

				const errorReason = getMemorySizeErrorReason(floatValue);
				setHelperText(errorReason);
				handleMemorySizeChange(floatValue, Boolean(errorReason));
			}}
			thousandSeparator
			value={value}
			{...muiTextFieldProps}
		/>
	);
};
