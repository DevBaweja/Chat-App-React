import { createSelector } from 'reselect';

const selectMode = state => state.mode;

export const selectModeMode = createSelector(selectMode, mode => mode.mode);
export const selectChatPanelMode = createSelector(selectMode, mode => mode.chatPanel);
export const selectChatBoxMode = createSelector(selectMode, mode => mode.chatBox);
export const selectChatProfileMode = createSelector(selectMode, mode => mode.chatProfile);
