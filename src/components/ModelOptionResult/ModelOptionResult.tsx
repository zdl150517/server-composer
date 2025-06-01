import type { FC } from "react";
import type { ModelOptionResultProps } from "./types";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import type { ServerModels } from "appConstants";

export const ModelOptionResult: FC<ModelOptionResultProps> = ({ items }) => {
	if (!Array.isArray(items)) {
		return <Typography>No Options</Typography>;
	}

	return (
		<List aria-live="polite">
			{items.map((item: ServerModels) => (
				<ListItem key={item}>
					<ListItemText primary={item} />
				</ListItem>
			))}
		</List>
	);
};
