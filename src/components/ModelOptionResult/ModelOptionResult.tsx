import type { FC } from "react";
import type { ModelOptionResultProps } from "./types";
import { List, ListItem, ListItemText } from "@mui/material";

export const ModelOptionResult: FC<ModelOptionResultProps> = ({ items }) => {
	return (
		<List>
			{items.map((item) => (
				<ListItem key={item}>
					<ListItemText primary={item} />
				</ListItem>
			))}
		</List>
	);
};
