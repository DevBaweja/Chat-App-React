import { createSelector } from 'reselect';

const selectMode = state => state.mode;

export const selectModeMode = createSelector(selectMode, mode => mode.mode);
