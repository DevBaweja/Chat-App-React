import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserUser = createSelector(selectUser, user => user.user);
