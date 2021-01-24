import { takeLatest, all, call, put } from 'redux-saga/effects';
import CombinedActionTypes from './combined.types';
import { mode } from '../../utils/base.util';
import { setChatPanelMode, setChatBoxMode, setChatProfileMode } from '../mode/mode.actions';

export function* setCombined(action) {
    switch (action.payload) {
        case mode.combined.ideal:
            yield put(setChatPanelMode(mode.chatPanel.ideal));
            yield put(setChatBoxMode(mode.chatBox.ideal));
            yield put(setChatProfileMode(mode.chatProfile.ideal));
            break;
        default: {
        }
    }
}
export function* onSetCombined() {
    yield takeLatest(CombinedActionTypes.SET_COMBINED, setCombined);
}

export function* combinedSagas() {
    yield all([call(onSetCombined)]);
}
