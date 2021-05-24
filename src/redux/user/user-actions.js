import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SET_CURRENT_USER,
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAIL,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
} from './user-types';

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const googleSignInStart = () => {
  return {
    type: GOOGLE_SIGN_IN_START,
  };
};

export const signInSuccess = (user) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFail = (error) => {
  return {
    type: SIGN_IN_FAIL,
    payload: error,
  };
};

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

export const checkUserSession = () => {
  return {
    type: CHECK_USER_SESSION,
  };
};

export const signOutStart = () => {
  return {
    type: SIGN_OUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signOutFail = (error) => {
  return {
    type: SIGN_OUT_FAIL,
    payload: error,
  };
};
