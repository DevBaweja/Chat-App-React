import { mode } from './base.util';

export const addAuthorizationHeaders = (headers, state) => {
    switch (state.mode) {
        case mode.mode.development:
            headers['authorization'] = 'Bearer ' + state.token;
            break;
        default: {
        }
    }
};
export const getToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    return token;
};
export const setToken = token => localStorage.setItem('token', token);
