import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
// import useApp from './app'
import { appReducer } from './app/appReducer'

export default configureStore({
  reducer: {
    // app: useApp.reducer,
    app: appReducer
  },
  middleware: [thunkMiddleware],
});