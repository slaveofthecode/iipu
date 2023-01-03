import { combineReducers } from 'redux';
import { AppState } from './app/state';
import { app } from './app';

export const rootReducer = combineReducers({    
    app: app.reducer,    
});

export interface State {
    app: AppState;
}
