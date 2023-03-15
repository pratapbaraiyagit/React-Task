import * as TYPE from "../Constants/types";

const initialState = {
    user: undefined,
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.LOGIN_SUCCESS:
            // const tokenStore = action.payload?.data?.authToken
            localStorage.setItem('user', JSON.stringify(action.payload?.data?.authToken));
            return {
                ...state,
                user: action.payload
            };
        case TYPE.LOGIN_ERROR:
            return {
                ...state,
                user: action.payload.message
            }

        case TYPE.LOGOUT:
            localStorage.removeItem('user')
            return initialState;

        default:
            return state;
    }
}

export default authReducer