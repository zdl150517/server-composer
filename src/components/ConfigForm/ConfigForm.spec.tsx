import { render, screen } from "@testing-library/react";
import { ConfigForm } from "./ConfigForm";
import { CpuType } from "appConstants";

const mockHandlers = {
	setCpu: (cpu: "" | CpuType) => null,
	setMemory: (memory: number) => null,
	setGpu: (hasGpu: boolean) => null,
	submit: () => null,
};

const mockConfig = {
	cpu: CpuType.ARM,
	memorySize: 4096,
	hasGpuAccelerator: false,
};

describe("ConfigForm component", () => {
	it("renders child component", () => {
		render(<ConfigForm config={mockConfig} handlers={mockHandlers} />);
		expect(screen.getByLabelText(/CPU/)).toBeVisible();
		expect(screen.getByLabelText(/Memory Size/)).toBeVisible();
		expect(screen.getByText(/GPU Accelerator Card/)).toBeVisible();
	});

	it("renders form submit button", () => {
		render(<ConfigForm config={mockConfig} handlers={mockHandlers} />);
		expect(screen.getByText(/Submit/)).toBeVisible();
	});
});
