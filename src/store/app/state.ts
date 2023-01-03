interface IAppState {
    getLoading : {
        isLoading: boolean;
        data: string | null;
        error: any;    
    }
  };

export const initialState : IAppState = {
    getLoading : {
        isLoading: false,
        data: null,
        error: null,
    }
};
  
export type AppState = typeof initialState;