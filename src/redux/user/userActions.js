import usersApi from '../../api/usersApi';
import { SET_USER_SIGN_UP_FIELD, CREATE_NEW_USER } from './userTypes';

export const setUserSignUpField = formField => {
  return {
    type: SET_USER_SIGN_UP_FIELD,
    payload: formField
  };
};

export const createNewUser = (userInfo, history) => async dispatch => {
  try {
    const user = await usersApi.post('/', userInfo);
    dispatch({
      type: CREATE_NEW_USER,
      payload: user.data
    });
    history.push('/signup/confirm');
  } catch (e) {
    console.error(e);
    history.push('/');
  }
};
