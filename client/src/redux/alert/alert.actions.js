import AlertActionTypes from './alert.types';

export const setAlert = mode => ({
    type: AlertActionTypes.SET_ALERT,
    payload: mode,
});

export const clearAlert = () => ({
    type: AlertActionTypes.CLEAR_ALERT,
});
