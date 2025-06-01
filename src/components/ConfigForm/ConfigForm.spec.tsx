import { render, screen } from "@testing-library/react";
import { ConfigForm } from "./ConfigForm";
import { CpuType } from "appConstants";
import userEvent from "@testing-library/user-event";

const mockHandlers = {
	setCpu: (cpu: "" | CpuType) => null,
	setMemory: (memory: number, hasError: boolean) => null,
	setGpu: (hasGpu: boolean) => null,
	submit: () => null,
};

const mockConfig = {
	cpu: CpuType.ARM,
	memorySize: 4096,
	hasGpuAccelerator: false,
	hasError: false,
};

describe("ConfigForm component", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("renders child component", () => {
		render(<ConfigForm config={mockConfig} handlers={mockHandlers} />);
		expect(screen.getByLabelText(/CPU/)).toBeVisible();
		expect(screen.getByLabelText(/Memory Size/)).toBeVisible();
		expect(screen.getByText(/GPU Accelerator Card/)).toBeVisible();
	});

	it("renders form submit button", () => {
		render(<ConfigForm config={mockConfig} handlers={mockHandlers} />);
		expect(screen.getByText(/Submit/)).toBeVisible();
		expect(screen.getByText(/Submit/)).toBeEnabled();
	});

	it("disables submit button if the 'hasError' flag is true", () => {
		render(
			<ConfigForm
				config={{ ...mockConfig, hasError: true }}
				handlers={mockHandlers}
			/>,
		);
		expect(screen.getByText(/Submit/)).toBeDisabled();
	});

	it("triggers submit handlers when submit button is clicked", () => {
		const mockSubmitHandler = jest.fn();

		render(
			<ConfigForm
				config={mockConfig}
				handlers={{ ...mockHandlers, submit: mockSubmitHandler }}
			/>,
		);

		expect(screen.getByText(/Submit/)).toBeEnabled();
		userEvent.click(screen.getByText(/Submit/));
		expect(mockSubmitHandler).toBeCalled();
	});
});
