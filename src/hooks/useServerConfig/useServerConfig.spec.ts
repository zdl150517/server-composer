import { renderHook, act } from "@testing-library/react";
import { reducer, initialState, useServerConfig } from "./useServerConfig";
import { CpuType } from "appConstants";

const mockEvaluateConfigOptions = jest.fn();

jest.mock("./evaluateConfigOptions", () => ({
	evaluateConfigOptions: () => mockEvaluateConfigOptions(),
}));

describe("serverConfig reducer", () => {
	it("should set CPU", () => {
		const newState = reducer(initialState, {
			type: "SET_CPU",
			payload: CpuType.POWER,
		});
		expect(newState.config.cpu).toBe(CpuType.POWER);
	});

	it("should set memory with the correct error flag", () => {
		const newState = reducer(initialState, {
			type: "SET_MEMORY",
			payload: { value: 8000, hasError: true },
		});
		expect(newState.config.memorySize).toBe(8000);
		expect(newState.config.hasError).toBe(true);
	});

	it("should set memory with the correct error flag", () => {
		const newState = reducer(initialState, {
			type: "SET_MEMORY",
			payload: { value: 8000, hasError: true },
		});
		expect(newState.config.memorySize).toBe(8000);
		expect(newState.config.hasError).toBe(true);
	});

	it("should dispatch submit action and update results", () => {
		mockEvaluateConfigOptions.mockReturnValue(["mock result"]);
		const newState = reducer(initialState, {
			type: "SUBMIT",
		});

		expect(newState.results).toEqual(["mock result"]);
	});
});

describe("useServerConfig hook", () => {
	it("should set CPU correctly", () => {
		const { result } = renderHook(() => useServerConfig());

		act(() => {
			result.current.handlers.setCpu(CpuType.POWER);
		});

		expect(result.current.state.config.cpu).toBe(CpuType.POWER);
	});

	it("should set memory and error correctly", () => {
		const { result } = renderHook(() => useServerConfig());

		act(() => {
			result.current.handlers.setMemory(65536, true);
		});

		expect(result.current.state.config.memorySize).toBe(65536);
		expect(result.current.state.config.hasError).toBe(true);
	});

	it("should set GPU flag", () => {
		const { result } = renderHook(() => useServerConfig());

		act(() => {
			result.current.handlers.setGpu(true);
		});

		expect(result.current.state.config.hasGpuAccelerator).toBe(true);
	});

	it("should evaluate config on submit", () => {
		mockEvaluateConfigOptions.mockReturnValue(["mock result"]);
		const { result } = renderHook(() => useServerConfig());

		act(() => {
			result.current.handlers.submit();
		});

		expect(result.current.state.results).toEqual(["mock result"]);
	});
});
