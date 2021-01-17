import SettingActionTypes from './setting.types';

const INITIAL_STATE = {
    theme: null,
    color: null,
};
const settingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SettingActionTypes.SET_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        case SettingActionTypes.SET_COLOR:
            return {
                ...state,
                color: action.payload,
            };
        default:
            return state;
    }
};

export default settingReducer;
