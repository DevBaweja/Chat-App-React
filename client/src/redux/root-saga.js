import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.sagas';
import { settingSagas } from './setting/setting.sagas';
import { alertSagas } from './alert/alert.sagas';
import { combinedSagas } from './combined/combined.sagas';

export default function* rootSaga() {
    yield all([call(userSagas), call(settingSagas), call(alertSagas), call(combinedSagas)]);
}
