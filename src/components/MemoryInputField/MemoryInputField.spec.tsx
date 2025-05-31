import { render, screen } from "@testing-library/react";
import { MemoryInputField } from "./MemoryInputField";
import userEvent from "@testing-library/user-event";

describe("MemoryInputField component", () => {
	it("renders component with default memory size value", () => {
		render(<MemoryInputField handleMemorySizeChange={jest.fn()} />);
		expect(screen.getByLabelText(/Memory Size/)).toBeVisible();
		expect(screen.getByDisplayValue("4,096")).toBeVisible();
	});

	it("show validation error message when initial memory size is out of range", async () => {
		render(<MemoryInputField value={512} handleMemorySizeChange={jest.fn()} />);

		expect(
			screen.getByText(
				"Memory size out of range. The range of this attribute is 4,096MB (included)-8,388,608MB (included).",
			),
		).toBeVisible();
	});

	it("show validation error message when initial memory size is not power of two", async () => {
		render(
			<MemoryInputField value={4097} handleMemorySizeChange={jest.fn()} />,
		);

		expect(
			screen.getByText("Memory size must be a power of two."),
		).toBeVisible();
	});

	it("show validation error messages after typing invalid number", async () => {
		render(<MemoryInputField handleMemorySizeChange={jest.fn()} />);

		// No error messages by default.
		expect(
			screen.queryByText("Memory size must be a power of two."),
		).toBeNull();
		expect(
			screen.queryByText(
				"Memory size out of range. The range of this attribute is 4,096MB (included)-8,388,608MB (included).",
			),
		).toBeNull();

		const input = screen.getByLabelText(/Memory Size/);

		userEvent.clear(input);
		userEvent.type(input, "2048");
		expect(
			screen.queryByText(
				"Memory size out of range. The range of this attribute is 4,096MB (included)-8,388,608MB (included).",
			),
		).toBeVisible();

		userEvent.clear(input);
		userEvent.type(input, "4097");

		expect(
			screen.getByText("Memory size must be a power of two."),
		).toBeVisible();
	});
});
