import UserActionTypes from './user.types';

const INITIAL_STATE = {
    user: null,
    token: null,
    login: null,
    signup: null,
    error: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
