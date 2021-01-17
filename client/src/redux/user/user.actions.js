import UserActionTypes from './user.types';

export const isLogin = () => ({
    type: UserActionTypes.IS_LOGIN,
});

export const setToken = token => ({
    type: UserActionTypes.SET_TOKEN,
    payload: token,
});
