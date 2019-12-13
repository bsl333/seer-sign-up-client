import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserSignUpFields = createSelector(
  [selectUser],
  user => user.userSignUpFields
);

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectUserCompletedSignUpForm = createSelector(
  [selectUserSignUpFields],
  formFields => Object.values(formFields).every(field => field)
);

export const selectUsername = createSelector(
  [selectCurrentUser],
  currentUser => currentUser.username
);
