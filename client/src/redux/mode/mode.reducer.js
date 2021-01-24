import ModeActionTypes from './mode.types';

const INITIAL_STATE = {
    mode: null,
};
const modeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ModeActionTypes.SET_MODE:
            return {
                ...state,
                mode: action.payload,
            };
        default:
            return state;
    }
};

export default modeReducer;
