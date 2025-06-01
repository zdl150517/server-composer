import { render, screen } from "@testing-library/react";
import { GpuToggleField } from "./GpuToggleField";
import userEvent from "@testing-library/user-event";

describe("GpuToggleField component", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("renders component", () => {
		render(<GpuToggleField handleGpuToggleChange={jest.fn()} />);
		expect(screen.getByText(/GPU Accelerator Card/)).toBeVisible();
	});

	it("can be checked", () => {
		render(<GpuToggleField value={true} handleGpuToggleChange={jest.fn()} />);
		expect(
			screen.getByRole("checkbox", {
				name: /GPU Accelerator Card/,
			}),
		).toBeChecked();
	});

	it("can be unchecked", () => {
		render(<GpuToggleField value={false} handleGpuToggleChange={jest.fn()} />);
		expect(
			screen.getByRole("checkbox", {
				name: /GPU Accelerator Card/,
			}),
		).not.toBeChecked();
	});

	it("trigger handleGpuToggleChange on click", () => {
		const mockHandleGpuToggleChange = jest.fn();
		render(
			<GpuToggleField
				value={false}
				handleGpuToggleChange={mockHandleGpuToggleChange}
			/>,
		);
		userEvent.click(
			screen.getByRole("checkbox", {
				name: /GPU Accelerator Card/,
			}),
		);

		expect(mockHandleGpuToggleChange).toBeCalled();
	});
});
