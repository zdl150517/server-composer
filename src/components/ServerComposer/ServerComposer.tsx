import { Box, List, ListItem, Typography, Divider } from "@mui/material";
import { ConfigForm } from "../ConfigForm";
export const ServerComposer = () => {
	return (
		<Box>
			<Typography variant="h3">Server Composer</Typography>
			<ConfigForm />
			<Divider />
			<Typography variant="h3">Server Model Options</Typography>
			<List>
				<ListItem>Tower Server</ListItem>
				<ListItem>4U Rack Server</ListItem>
				<ListItem>Mainframe</ListItem>
			</List>
		</Box>
	);
};
