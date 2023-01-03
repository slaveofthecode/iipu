/* eslint-disable import/no-anonymous-default-export */
import { getLoading } from './actions';

interface IAppState {
    getLoading : {
        isLoading: boolean;
        data: string | null;
        error: any;    
    }
};

const getLoadingReducer = {
    [`${getLoading.pending}`]: (state:IAppState) => {
        state.getLoading = {
            isLoading: true,
            data: null,
            error: null,
        };
    },
    [`${getLoading.fulfilled}`]: (state:IAppState, { payload } : { payload: any }) => {
        state.getLoading = { 
            isLoading : false,
            data : payload,
            error : null
        }
    },
    [`${getLoading.rejected}`]: (state:IAppState , { payload } : { payload: any }) => {
        state.getLoading = {  
            isLoading : false,
            data : null,
            error : payload
        }
    },
}

let REDUCERS = {};

REDUCERS = {...REDUCERS, ...getLoadingReducer};

export {
    REDUCERS
}