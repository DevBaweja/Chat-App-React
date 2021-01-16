import { createSelector } from 'reselect';

const selectToken = state => state.token;

export const selectTokenToken = createSelector(selectToken, token => token.token);
