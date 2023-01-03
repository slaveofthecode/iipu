import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import { app } from './app';

export default configureStore({
  reducer: {
    app: app.reducer,
  },
  middleware: [thunkMiddleware],
});