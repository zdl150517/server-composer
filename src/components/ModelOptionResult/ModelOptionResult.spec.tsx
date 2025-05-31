import { render, screen } from "@testing-library/react";
import { ModelOptionResult } from "./ModelOptionResult";
import { ServerModels } from "appConstants";

describe("ModelOptionResult", () => {
	it("renders a list of items", () => {
		const items = [
			ServerModels.HighDensityServer,
			ServerModels.MainFrame,
			ServerModels.TowerServer,
		];

		render(<ModelOptionResult items={items} />);

		for (const item of items) {
			expect(screen.getByText(item)).toBeVisible();
		}
	});

	it("renders an empty list when items is empty", () => {
		const items: ServerModels[] = [];

		render(<ModelOptionResult items={items} />);

		const listItems = screen.queryAllByRole("listitem");
		expect(listItems).toHaveLength(0);
	});
});
