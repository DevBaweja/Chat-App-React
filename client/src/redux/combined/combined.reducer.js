import CombinedActionTypes from './combined.types';

const INITIAL_STATE = {
    mode: null,
};
const settingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CombinedActionTypes.SET_COMBINED:
            return {
                ...state,
                mode: action.payload,
            };
        default:
            return state;
    }
};

export default settingReducer;
