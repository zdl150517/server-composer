import { getByLabelText, render, screen } from "@testing-library/react";
import { ServerComposer } from "./ServerComposer";
import userEvent from "@testing-library/user-event";

describe("ServerComposer component", () => {
	it("renders the main heading for config options", () => {
		render(<ServerComposer />);
		expect(screen.getByText("Server Composer")).toBeVisible();
	});

	it("renders the main heading for server model options", () => {
		render(<ServerComposer />);
		expect(screen.getByText("Server Model Options")).toBeVisible();
	});

	it("renders correct model options with the correct config input", () => {
		render(<ServerComposer />);

		expect(screen.queryByText("High Density Server")).toBeNull();

		userEvent.click(screen.getByLabelText(/CPU/));
		userEvent.click(screen.getByText("ARM"));
		userEvent.type(screen.getByLabelText(/Memory Size/), "524288");
		userEvent.click(
			screen.getByRole("checkbox", {
				name: /GPU Accelerator Card/,
			}),
		);
		userEvent.click(
			screen.getByRole("button", {
				name: /Submit/,
			}),
		);

		expect(screen.getByText("High Density Server")).toBeVisible();
	});

	it("renders 'No Options' with the invalid config input", () => {
		render(<ServerComposer />);

		expect(screen.queryByText("No Options")).toBeNull();

		userEvent.click(screen.getByLabelText(/CPU/));
		userEvent.click(screen.getByText("X86"));
		userEvent.type(screen.getByLabelText(/Memory Size/), "524288");
		userEvent.click(
			screen.getByRole("checkbox", {
				name: /GPU Accelerator Card/,
			}),
		);
		userEvent.click(
			screen.getByRole("button", {
				name: /Submit/,
			}),
		);

		expect(screen.getByText("No Options")).toBeVisible();
	});
});
