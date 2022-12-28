import { useDispatch, useSelector } from 'react-redux';
import { loadImageAction } from './actions';
import { loadImageSelector } from './selectors';

export const useApp = () => {
	const dispatch = useDispatch();

	const loadImage = {
		execute: () => dispatch(loadImageAction()),
		isLoading: useSelector(loadImageSelector.isLoading),
		data: useSelector(loadImageSelector.data),
		error: useSelector(loadImageSelector.error),
	};

	return {
		loadImage,
	};
};
