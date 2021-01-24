import ModeActionTypes from './mode.types';

const INITIAL_STATE = {
    mode: null,
    chatPanel: null,
    chatBox: null,
    chatProfile: null,
};

const modeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ModeActionTypes.SET_MODE:
            return {
                ...state,
                mode: action.payload,
            };
        case ModeActionTypes.SET_CHAT_PANEL_MODE:
            return {
                ...state,
                chatPanel: action.payload,
            };
        case ModeActionTypes.SET_CHAT_BOX_MODE:
            return {
                ...state,
                chatBox: action.payload,
            };
        case ModeActionTypes.SET_CHAT_PROFILE_MODE:
            return {
                ...state,
                chatProfile: action.payload,
            };
        default:
            return state;
    }
};

export default modeReducer;
