import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserSignUpFields = createSelector(
  [selectUser],
  user => user.userSignUpFields
);
