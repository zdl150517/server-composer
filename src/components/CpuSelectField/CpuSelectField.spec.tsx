import { render, screen } from "@testing-library/react";
import { CpuSelectField } from "./CpuSelectField";
import { CpuType } from "appConstants";
import userEvent from "@testing-library/user-event";

describe("CpuSelectField component", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("renders component", () => {
		render(
			<CpuSelectField value={CpuType.POWER} handleCpuChange={jest.fn()} />,
		);
		expect(screen.getByLabelText(/CPU/)).toBeVisible();
		expect(screen.getByText("Power")).toBeVisible();
	});

	it("renders all three options", () => {
		render(<CpuSelectField value="" handleCpuChange={jest.fn()} />);
		userEvent.click(screen.getByLabelText(/CPU/));
		expect(screen.getByText("ARM")).toBeVisible();
		expect(screen.getByText("X86")).toBeVisible();
		expect(screen.getByText("Power")).toBeVisible();
	});

	it("triggers handlers on selecting new options", () => {
		const mockHandler = jest.fn();
		render(<CpuSelectField value="" handleCpuChange={mockHandler} />);
		userEvent.click(screen.getByLabelText(/CPU/));

		userEvent.click(screen.getByText("ARM"));
		expect(mockHandler).toHaveBeenCalledWith(CpuType.ARM);
	});
});
