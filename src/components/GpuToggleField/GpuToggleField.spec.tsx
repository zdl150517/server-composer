import { render, screen } from "@testing-library/react";
import { GpuToggleField } from "./GpuToggleField";
import userEvent from "@testing-library/user-event";

describe("GpuToggleField component", () => {
	it("renders component", () => {
		render(<GpuToggleField handleGpuToggleChange={jest.fn()} />);
		expect(screen.getByText(/GPU Accelerator Card/)).toBeVisible();
	});

	it("can be checked and unchecked", () => {
		render(<GpuToggleField handleGpuToggleChange={jest.fn()} />);
		const checkBox = screen.getByRole("checkbox", {
			name: /GPU Accelerator Card/,
		});
		userEvent.click(checkBox);
		expect(checkBox).toBeChecked();
	});
});
