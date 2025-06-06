import { Stack, Typography, Divider } from "@mui/material";
import { ConfigForm } from "components/ConfigForm";
import { ModelOptionResult } from "components/ModelOptionResult";
import { useServerConfig } from "hooks/useServerConfig";

export const ServerComposer = () => {
	const { state, handlers } = useServerConfig();
	const { config, results } = state;
	return (
		<Stack width="70vw" mx="auto" spacing={2}>
			<Typography variant="h5">Server Composer</Typography>
			<ConfigForm config={config} handlers={handlers} />
			<Divider />
			<Typography variant="h5">Server Model Options</Typography>
			<ModelOptionResult items={results} />
		</Stack>
	);
};
