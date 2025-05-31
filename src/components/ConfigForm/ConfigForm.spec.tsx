import { render, screen } from "@testing-library/react";
import { ConfigForm } from "./ConfigForm";

describe("ConfigForm component", () => {
	it("renders child component", () => {
		render(<ConfigForm />);
		expect(screen.getByLabelText(/CPU/)).toBeVisible();
		expect(screen.getByLabelText(/Memory Size/)).toBeVisible();
	});

	it("renders form submit button", () => {
		render(<ConfigForm />);
		expect(screen.getByText(/Submit/)).toBeVisible();
	});
});
