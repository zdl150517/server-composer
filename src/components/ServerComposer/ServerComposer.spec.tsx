import { render, screen } from "@testing-library/react";
import { ServerComposer } from "./ServerComposer";

describe("ServerComposer component", () => {
	it("renders the main heading", () => {
		render(<ServerComposer />);
		expect(screen.getByText("Server Composer")).toBeVisible();
	});
});
