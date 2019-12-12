import { SET_USER_SIGN_UP_FIELD } from './userTypes';

export const setUserSignUpField = user => {
  return {
    type: SET_USER_SIGN_UP_FIELD,
    payload: user
  };
};
