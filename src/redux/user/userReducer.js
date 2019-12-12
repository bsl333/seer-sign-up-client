import { SET_USER_SIGN_UP_FIELD } from './userTypes';

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
    default:
      return state;
  }
};

export default userReducer;
