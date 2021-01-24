import ModeActionTypes from './mode.types';

export const setMode = mode => ({
    type: ModeActionTypes.SET_MODE,
    payload: mode,
});

export const setChatPanelMode = mode => ({
    type: ModeActionTypes.SET_CHAT_PANEL_MODE,
    payload: mode,
});
export const setChatBoxMode = mode => ({
    type: ModeActionTypes.SET_CHAT_BOX_MODE,
    payload: mode,
});
export const setChatProfileMode = mode => ({
    type: ModeActionTypes.SET_CHAT_PROFILE_MODE,
    payload: mode,
});
