import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { clearAlert } from './alert.actions';
import AlertActionTypes from './alert.types';

export function* setAlert() {
    let time = 2000;
    yield delay(time);
    yield put(clearAlert());
}
export function* onSetAlert() {
    yield takeLatest(AlertActionTypes.SET_ALERT, setAlert);
}

export function* alertSagas() {
    yield all([call(onSetAlert)]);
}
