// import { useDispatch, useSelector } from 'react-redux';
// import { loadImageAction } from './actions';
// import { loadImageSelector } from './selectors';

// export const useApp = () => {
// 	const dispatch = useDispatch();

// 	const loadImage = {
// 		execute: () => dispatch(loadImageAction()),
// 		isLoading: useSelector(loadImageSelector.isLoading),
// 		data: useSelector(loadImageSelector.data),
// 		error: useSelector(loadImageSelector.error),
// 	};

// 	return {
// 		loadImage,
// 	};
// };


import { createSlice } from '@reduxjs/toolkit'

interface IAppState {
	loadImage: {
	  isLoading: boolean;
	  data: string | null;
	  error: any;
	};
  }

export const useApp = createSlice({
  name: 'useApp',
  initialState: {
    isLoading: false,
	data: '' as string | null,
	error: '' as string | null,
	
  },
  reducers: {
	loadImage: (state) => {
		state.isLoading = true;
		state.error = null;
		state.data = 'al fin se cargo la imagen';			
	},
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data += 'jejej';
    },
    decrement: (state) => {
		state.data = 'jojo';
    },
    incrementByAmount: (state, action) => {
      state.data += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, loadImage } = useApp.actions

export default useApp.reducer