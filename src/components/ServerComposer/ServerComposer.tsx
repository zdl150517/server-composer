import { Box, Typography, Divider } from "@mui/material";
import { ConfigForm } from "components/ConfigForm";
import { ModelOptionResult } from "components/ModelOptionResult";
import { useServerConfig } from "hooks/useServerConfig";

export const ServerComposer = () => {
	const { state, handlers } = useServerConfig();
	const { config, results } = state;
	return (
		<Box>
			<Typography variant="h3">Server Composer</Typography>
			<ConfigForm config={config} handlers={handlers} />
			<Divider />
			<Typography variant="h3">Server Model Options</Typography>
			<ModelOptionResult items={results} />
		</Box>
	);
};
