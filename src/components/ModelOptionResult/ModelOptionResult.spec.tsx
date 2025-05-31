import { render, screen } from "@testing-library/react";
import { ModelOptionResult } from "./ModelOptionResult";

describe("ModelOptionResult", () => {
	it("renders a list of items", () => {
		const items = ["Tower Server", "4U Rack Server", "Mainframe"];

		render(<ModelOptionResult items={items} />);

		for (const item of items) {
			expect(screen.getByText(item)).toBeVisible();
		}
	});

	it("renders an empty list when items is empty", () => {
		const items: string[] = [];

		render(<ModelOptionResult items={items} />);

		const listItems = screen.queryAllByRole("listitem");
		expect(listItems).toHaveLength(0);
	});
});
