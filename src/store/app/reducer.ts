// import { ACTION_SUFFIX } from '@store/interfaces';
import { handleActions } from 'redux-actions';
import { ACTIONS } from './actions';
import { ACTION_SUFFIX } from '../interfaces';

interface IAppState {
  loadImage: {
    isLoading: boolean;
    data: string | null;
    error: any;
  };
}

const appState: IAppState = {
  loadImage: {
    isLoading: false,
    data: null,
    error: null,
  },
};

export type AppState = typeof appState;

const LOAD_IMAGE = {  
  [`${ACTIONS.LOAD_IMAGE}${ACTION_SUFFIX._PENDING}`]: (state: IAppState) => ({
    ...state,
    loadImage: {
      isLoading: true,
      error: null,
    },
  }),
  [`${ACTIONS.LOAD_IMAGE}${ACTION_SUFFIX._FULFILLED}`]: (
    state: IAppState,
    action: { payload: any }    
  ) => {
    console.log('action.payload -> ', action.payload);
    return {
      ...state,
      loadImage: {
        isLoading: false,
        data: action.payload,
      },
    };
  },
  [`${ACTIONS.LOAD_IMAGE}${ACTION_SUFFIX._REJECTED}`]: (
    state: IAppState,
    action: { payload: any }
  ) => {
    return {
      ...state,
      loadImage: {
        isLoading: false,
        data: null,
        error: action.payload,
      },
    };
  },
};

let actions = {};

actions = { ...actions, ...LOAD_IMAGE };
console.log('actions -> ', actions);
export default handleActions(actions, appState);
