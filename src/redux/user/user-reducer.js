import {
  EMAIL_SIGN_IN_FAIL,
  EMAIL_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAIL,
  GOOGLE_SIGN_IN_SUCCESS,
} from './user-types';

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GOOGLE_SIGN_IN_SUCCESS:
    case EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case GOOGLE_SIGN_IN_FAIL:
    case EMAIL_SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
