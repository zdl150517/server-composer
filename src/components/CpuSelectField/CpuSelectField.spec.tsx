import { render, screen } from "@testing-library/react";
import { CpuSelectField } from "./CpuSelectField";
import { CpuType } from "./types";
import userEvent from "@testing-library/user-event";

describe("CpuSelectField component", () => {
	it("renders component", () => {
		render(<CpuSelectField handleCpuChange={jest.fn()} />);
		expect(screen.getByLabelText(/CPU/)).toBeVisible();
	});

	it("renders all three options", async () => {
		render(<CpuSelectField handleCpuChange={jest.fn()} />);
		userEvent.click(await screen.findByLabelText(/CPU/));

		expect(await screen.findByText("ARM")).toBeVisible();
		expect(await screen.findByText("X86")).toBeVisible();
		expect(await screen.findByText("Power")).toBeVisible();
	});

	it("triggers handlers on selecting new options", async () => {
		const mockHandler = jest.fn();
		render(<CpuSelectField handleCpuChange={mockHandler} />);
		userEvent.click(await screen.findByLabelText(/CPU/));

		userEvent.click(await screen.findByText("ARM"));
		expect(mockHandler).toHaveBeenCalledWith(CpuType.ARM);
	});
});
