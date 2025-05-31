import { Box, Stack, Button } from "@mui/material";
import { CpuSelectField } from "../CpuSelectField";
import { MemoryInputField } from "../MemoryInputField";

export const ConfigForm = () => {
	return (
		<Box component="form">
			<Stack direction="row" spacing={2} alignItems="flex-start">
				<CpuSelectField handleCpuChange={console.log} />
				<MemoryInputField handleMemorySizeChange={console.log} />
			</Stack>
			<Button variant="outlined" type="submit">
				Submit
			</Button>
		</Box>
	);
};
