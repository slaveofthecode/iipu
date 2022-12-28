import { combineReducers } from 'redux';
import appReducer, { AppState } from './app/reducer';


export const rootReducer = combineReducers({    
    app: appReducer,    
});

export interface State {
    app: AppState;
}

