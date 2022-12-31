/* eslint-disable no-useless-computed-key */
import { loadImageService } from '@/services/app';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface IAppState {
      isLoading: boolean;
      data: string | null;
      error: any;    
  };

const initialState : IAppState = {
    isLoading: false,
    data: null,
    error: null,
};

// interface IAppState {
//     loadImage: {
//       isLoading: boolean;
//       data: string | null;
//       error: any;
//     };
//   }
  
//   const appState: IAppState = {
//     loadImage: {
//       isLoading: false,
//       data: null,
//       error: null,
//     },
//   };
  
export type AppState = typeof initialState;

enum ACTION_SUFFIX {
  _PENDING = '.pending',
  _FULFILLED = '.fulfilled',
  _REJECTED = '.rejected'
}

export const getLoading = createAsyncThunk(
  'app/getLoading',
  async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json());
    // return res
    return await loadImageService();
  }
);

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getLoading.pending}`]: (state:IAppState) => {
      state.isLoading = true;
      state.data = null;
      state.error = null;
    },
    [`${getLoading.fulfilled}`]: (state:IAppState, { payload } : { payload: any }) => {
      state.isLoading = false;
      state.data = payload;
      state.error = null;
    },
    [`${getLoading.rejected}`]: (state:IAppState , { payload } : { payload: any }) => {
      state.isLoading = false;
      state.data = null;
      state.error = payload;
    },
  },
})

export const appReducer = appSlice.reducer