import { State } from '../rootReducer';

export const loadImageSelector = {
	isLoading: (state: State) => state.app.loadImage?.isLoading,
	data: (state: State) => state.app.loadImage?.data,
	error: (state: State) => state.app.loadImage?.error,
};
