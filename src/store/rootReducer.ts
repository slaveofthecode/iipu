import { combineReducers } from 'redux';
import { AppState, appReducer } from './app/appReducer';



export const rootReducer = combineReducers({    
    app: appReducer,    
});

export interface State {
    app: AppState;
}
