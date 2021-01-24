import AlertActionTypes from './alert.types';

const INITIAL_STATE = {
    mode: null,
};

const alertReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AlertActionTypes.SET_ALERT:
            return {
                ...state,
                mode: action.payload,
            };
        case AlertActionTypes.CLEAR_ALERT:
            return {
                ...state,
                mode: null,
            };
        default:
            return state;
    }
};

export default alertReducer;
