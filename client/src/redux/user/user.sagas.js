import axios from 'axios';
import { takeLatest, all, call, select } from 'redux-saga/effects';
import { selectModeMode } from '../mode/mode.selector';
import { selectTokenToken } from '../token/token.selector';
import UserActionTypes from './user.types';
import { mode, url } from '../../utils/base.util';

export function* isLogin() {
    let state = {
        mode: yield select(selectModeMode),
        token: yield select(selectTokenToken),
    };
    let headers = {};
    switch (state.mode) {
        case mode.mode.development:
            headers['authorization'] = 'Bearer ' + state.token;
            break;
        default: {
        }
    }
    try {
        let data = yield call(() =>
            axios({
                method: 'GET',
                url: `${url[state.mode]}api/v1/users/isLogin`,
                headers,
                validateStatus: () => true,
                // For validation
            })
        );
        console.log(data);
    } catch (err) {
        console.log('Error', err.message);
    }
}

export function* onIsLogin() {
    yield takeLatest(UserActionTypes.IS_LOGIN, isLogin);
    console.log('Here');
}

export function* userSagas() {
    yield all([call(onIsLogin)]);
}
