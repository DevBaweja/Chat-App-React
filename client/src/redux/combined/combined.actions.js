import CombinedActionTypes from './combined.types';

export const setCombined = mode => ({
    type: CombinedActionTypes.SET_COMBINED,
    payload: mode,
});
