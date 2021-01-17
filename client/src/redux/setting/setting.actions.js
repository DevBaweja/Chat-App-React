import SettingActionTypes from './setting.types';

export const setTheme = theme => ({
    type: SettingActionTypes.SET_THEME,
    payload: theme,
});

export const setToken = color => ({
    type: SettingActionTypes.SET_COLOR,
    payload: color,
});
