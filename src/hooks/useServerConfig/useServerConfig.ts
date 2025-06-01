import { useReducer, useCallback } from "react";
import type { CpuType } from "appConstants";
import type { State, Action } from "./types";
import { evaluateConfigOptions } from "./evaluateConfigOptions";

export const initialState: State = {
	config: {
		cpu: "",
		memorySize: undefined,
		hasGpuAccelerator: false,
	},
	results: [],
};

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "SET_CPU":
			return {
				...state,
				config: {
					...state.config,
					cpu: action.payload,
				},
			};
		case "SET_MEMORY":
			return {
				...state,
				config: {
					...state.config,
					memorySize: action.payload.value,
					hasError: action.payload.hasError,
				},
			};
		case "SET_GPU":
			return {
				...state,
				config: {
					...state.config,
					hasGpuAccelerator: action.payload,
				},
			};
		case "SUBMIT":
			return {
				...state,
				results: evaluateConfigOptions(state.config),
			};
	}
};

/**
 * Hook for managing server config option states.
 * Providing handlers to update states and inferring server model results.
 */
export const useServerConfig = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handlers = {
		setCpu: useCallback((cpu: CpuType | "") => {
			dispatch({ type: "SET_CPU", payload: cpu });
		}, []),

		setMemory: useCallback((memory: number, hasError: boolean) => {
			dispatch({
				type: "SET_MEMORY",
				payload: { value: memory, hasError: hasError },
			});
		}, []),

		setGpu: useCallback((hasGpu: boolean) => {
			dispatch({ type: "SET_GPU", payload: hasGpu });
		}, []),

		submit: useCallback(() => {
			dispatch({
				type: "SUBMIT",
			});
		}, []),
	};

	return {
		state,
		handlers,
	};
};
