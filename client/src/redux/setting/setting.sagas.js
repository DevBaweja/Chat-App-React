import { takeLatest, all, call } from 'redux-saga/effects';
import SettingActionTypes from './setting.types';

export function* onSetTheme() {
    yield takeLatest(SettingActionTypes.SET_THEME, action =>
        document.documentElement.setAttribute('data-theme', action.payload)
    );
}

export function* onSetColor() {
    yield takeLatest(SettingActionTypes.SET_COLOR, action =>
        document.documentElement.setAttribute('data-color', action.payload)
    );
}

export function* settingSagas() {
    yield all([call(onSetTheme), call(onSetColor)]);
}
