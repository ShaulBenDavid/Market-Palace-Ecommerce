import { newReducer } from "../../Utils/Reducer/Reducer";
import USER_ACTION_TYPE from "./User.types";

// Check if user all ready log
export const checkUserSession = () =>
  newReducer(USER_ACTION_TYPE.CHECK_USER_SESSION);
// Login with google
export const googleLogInStart = () =>
  newReducer(USER_ACTION_TYPE.GOOGLE_LOG_IN_START);
// Login with user
export const emailLogInStart = (email, password) =>
  newReducer(USER_ACTION_TYPE.EMAIL_LOG_IN_START, { email, password });
// If login success
export const logInSuccess = (user) =>
  newReducer(USER_ACTION_TYPE.LOG_IN_SUCCESS, user);
// If login failed
export const logInFailed = (error) =>
  newReducer(USER_ACTION_TYPE.LOG_IN_SUCCESS, error);

// Sign up
export const signUpStart = (email, password, displayName) =>
  newReducer(USER_ACTION_TYPE.SIGN_UP_START, { email, password, displayName });
// Sign up Success
export const signUpSuccess = (user, additionalInfo) =>
  newReducer(USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user, additionalInfo });
// Sign up Failed
export const signUpFailed = (error) =>
  newReducer(USER_ACTION_TYPE.SIGN_UP_FAILED, error);

// Log out start
export const logOutStart = () =>
  newReducer(USER_ACTION_TYPE.LOG_OUT_START);
// Log out success
export const logOutSuccess = () =>
  newReducer(USER_ACTION_TYPE.LOG_OUT_SUCCESS);
// Log out failed
export const logOutFailed = (error) =>
  newReducer(USER_ACTION_TYPE.LOG_OUT_FAILED, error);