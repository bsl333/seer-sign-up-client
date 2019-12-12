import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserSignUpFields = createSelector(
  [selectUser],
  user => user.userSignUpFields
);

export const selectUserCompletedSignUpForm = createSelector(
  [selectUserSignUpFields],
  formFields => Object.values(formFields).every(field => field)
);
