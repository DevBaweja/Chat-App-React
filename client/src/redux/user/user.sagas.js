import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';

export function* isLogin() {
    yield console.log('Hi');
}
export function* onIsLogin() {
    yield takeLatest(UserActionTypes.IS_LOGIN, isLogin);
}

export function* userSagas() {
    yield all([call(onIsLogin)]);
}
