import type { FC } from "react";
import { Box, Stack, Button } from "@mui/material";
import { CpuSelectField } from "components/CpuSelectField";
import { MemoryInputField } from "components/MemoryInputField";
import { GpuToggleField } from "components/GpuToggleField";
import type { ConfigFormProps } from "./types";

export const ConfigForm: FC<ConfigFormProps> = ({ handlers, config }) => {
	const { setCpu, setGpu, setMemory, submit } = handlers;
	const { cpu, memorySize, hasGpuAccelerator, hasError } = config;

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		submit();
	};

	return (
		<Box component="form" onSubmit={handleSubmit}>
			<Stack alignItems="flex-start" spacing={2}>
				<Stack
					direction={{ xs: "column", sm: "row" }}
					spacing={2}
					alignItems="flex-start"
				>
					<CpuSelectField value={cpu} handleCpuChange={setCpu} />
					<MemoryInputField
						value={memorySize}
						handleMemorySizeChange={setMemory}
					/>
					<GpuToggleField
						value={hasGpuAccelerator}
						handleGpuToggleChange={setGpu}
					/>
				</Stack>
				<Button disabled={hasError} variant="outlined" type="submit">
					Submit
				</Button>
			</Stack>
		</Box>
	);
};
