import { Box, Stack, Button } from "@mui/material";
import { CpuSelectField } from "../CpuSelectField";

export const ConfigForm = () => {
	return (
		<Box component="form">
			<Stack direction="row" spacing={2} alignItems="flex-start">
				<CpuSelectField handleCpuChange={console.log} />
			</Stack>
			<Button variant="outlined" type="submit">
				Submit
			</Button>
		</Box>
	);
};
