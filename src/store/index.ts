// import { applyMiddleware, compose } from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer';

// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//     rootReducer,
//     composeEnhancers(
//         applyMiddleware(promiseMiddleware)
//     )
// );

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    })
  });