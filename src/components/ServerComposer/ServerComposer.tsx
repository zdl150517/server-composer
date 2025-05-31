import { Box, Typography, Divider } from "@mui/material";
import { ConfigForm } from "../ConfigForm";
import { ModelOptionResult } from "../ModelOptionResult";
export const ServerComposer = () => {
	return (
		<Box>
			<Typography variant="h3">Server Composer</Typography>
			<ConfigForm />
			<Divider />
			<Typography variant="h3">Server Model Options</Typography>
			<ModelOptionResult
				items={["Tower Server", "4U Rack Server", "Mainframe"]}
			/>
		</Box>
	);
};
