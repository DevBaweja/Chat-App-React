import { createSelector } from 'reselect';

const selectAlert = state => state.alert;

export const selectAlertMode = createSelector(selectAlert, alert => alert.mode);
