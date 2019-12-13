import { SET_USER_SIGN_UP_FIELD, CREATE_NEW_USER } from './userTypes';

const initialUserSignUpState = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const INITIAL_STATE = {
  currentUser: null,
  userSignUpFields: initialUserSignUpState
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_SIGN_UP_FIELD:
      return {
        ...state,
        userSignUpFields: {
          ...state.userSignUpFields,
          ...action.payload
        }
      };
    case CREATE_NEW_USER:
      return {
        ...state,
        currentUser: action.payload,
        userSignUpFields: initialUserSignUpState
      };
    default:
      return state;
  }
};

export default userReducer;
