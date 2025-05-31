import { render, screen } from "@testing-library/react";
import { GpuToggleField } from "./GpuToggleField";
import userEvent from "@testing-library/user-event";

describe("GpuToggleField component", () => {
	it("renders component", () => {
		render(<GpuToggleField handleGpuToggleChange={console.log} />);
		expect(screen.getByText(/GPU Accelerator Card/)).toBeVisible();
	});

	it("can be checked and unchecked", () => {
		render(<GpuToggleField handleGpuToggleChange={console.log} />);
		const checkBox = screen.getByRole("checkbox", {
			name: /GPU Accelerator Card/,
		});
		userEvent.click(checkBox);
		expect(checkBox).toBeChecked();
	});
});
