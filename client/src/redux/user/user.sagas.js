import axios from 'axios';
import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { selectModeMode } from '../mode/mode.selector';
import { selectUserToken } from '../user/user.selector';
import UserActionTypes from './user.types';
import { setTheme, setColor } from '../setting/setting.actions';
import { setAlert } from '../alert/alert.actions';
import { setCombined } from '../combined/combined.actions';

import { mode, addAuthorizationHeaders, url, parseData, theme, color, randomItem } from '../../utils/base.util';

export function* isLogin() {
    let state = {
        mode: yield select(selectModeMode),
        token: yield select(selectUserToken),
    };
    let headers = {};
    addAuthorizationHeaders(headers, state);

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
        data = parseData(data);
        switch (data.status) {
            case 'success':
                console.log(data);
                break;
            default: {
                console.log(data);
                yield put(setTheme(randomItem(theme)));
                yield put(setColor(randomItem(color)));
                yield put(setAlert(mode.alert.welcome.new));
                yield put(setCombined(mode.combined.ideal));
            }
        }
    } catch (err) {
        console.log('Error', err.message);
    }
}

export function* onIsLogin() {
    yield takeLatest(UserActionTypes.IS_LOGIN, isLogin);
}

export function* userSagas() {
    yield all([call(onIsLogin)]);
}
