import { createSelector } from 'reselect';

const selectSetting = state => state.setting;

export const selectTheme = createSelector(selectSetting, setting => setting.theme);

export const selectColor = createSelector(selectSetting, setting => setting.color);
