import { useReducer, useCallback } from "react";
import type { CpuType } from "appConstants";
import type { State, Action } from "./types";
import { evaluateConfigOptions } from "./evaluateConfigOptions";

const initialState: State = {
	config: {
		cpu: "",
		memorySize: 4096,
		hasGpuAccelerator: false,
	},
	results: [],
};

const reducer = (state: State, action: Action): State => {
	console.log(action.type);
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
					memorySize: action.payload,
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

export const useServerConfig = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handlers = {
		setCpu: useCallback((cpu: CpuType | "") => {
			dispatch({ type: "SET_CPU", payload: cpu });
		}, []),

		setMemory: useCallback((memory: number) => {
			dispatch({ type: "SET_MEMORY", payload: memory });
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
