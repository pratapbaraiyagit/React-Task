import * as TYPE from "../Constants/types";

const initialState = {
    loading: undefined,
    message: undefined,
    error: undefined
};

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.API_REQUEST:
            return { ...state, loading: true };
        case TYPE.API_SUCCESS:
            return { ...state, loading: false, error: undefined, message: action.payload.message };
        case TYPE.API_ERROR:
            return { ...state, loading: false, error: action.payload.error, message: action.payload.message };
        default:
            return state;
    }
}

export default apiReducer