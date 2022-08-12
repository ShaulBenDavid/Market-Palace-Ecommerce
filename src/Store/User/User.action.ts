import USER_ACTION_TYPE from "./User.types";
import {
  newReducer,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../Utils/Reducer/Reducer";
import { User } from "firebase/auth";
// Types
import { UserDate, AdditionalInfo } from "../../Utils/FireBase/FIreBase";

export type CheckUserSession = Action<USER_ACTION_TYPE.CHECK_USER_SESSION>;

export type GoogleLogInStart = Action<USER_ACTION_TYPE.GOOGLE_LOG_IN_START>;

export type EmailLogInStart = ActionWithPayload<
  USER_ACTION_TYPE.EMAIL_LOG_IN_START,
  { email: string; password: string }
>;

export type LogInSuccess = ActionWithPayload<
  USER_ACTION_TYPE.LOG_IN_SUCCESS,
  UserDate
>;

export type LogInFailed = ActionWithPayload<
  USER_ACTION_TYPE.LOG_IN_FAILED,
  Error
>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPE.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPE.SIGN_UP_SUCCESS,
  { user: User; additionalInfo: AdditionalInfo }
>;

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPE.SIGN_UP_FAILED,
  Error
>;

export type LogOutStart = Action<USER_ACTION_TYPE.LOG_OUT_START>;

export type LogOutSuccess = Action<USER_ACTION_TYPE.LOG_OUT_SUCCESS>;

export type LogOutFailed = ActionWithPayload<
  USER_ACTION_TYPE.LOG_OUT_FAILED,
  Error
>;

// Check if user all ready log
export const checkUserSession = withMatcher(
  (): CheckUserSession => newReducer(USER_ACTION_TYPE.CHECK_USER_SESSION)
);
// Login with google
export const googleLogInStart = withMatcher(
  (): GoogleLogInStart => newReducer(USER_ACTION_TYPE.GOOGLE_LOG_IN_START)
);
// Login with user
export const emailLogInStart = withMatcher(
  (email: string, password: string): EmailLogInStart =>
    newReducer(USER_ACTION_TYPE.EMAIL_LOG_IN_START, { email, password })
);
// If login success
export const logInSuccess = withMatcher(
  (user: UserDate & { id: string }): LogInSuccess =>
    newReducer(USER_ACTION_TYPE.LOG_IN_SUCCESS, user)
);
// If login failed
export const logInFailed = withMatcher(
  (error: Error): LogInFailed =>
    newReducer(USER_ACTION_TYPE.LOG_IN_FAILED, error)
);

// Sign up
export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    newReducer(USER_ACTION_TYPE.SIGN_UP_START, { email, password, displayName })
);
// Sign up Success
export const signUpSuccess = withMatcher(
  (user: User, additionalInfo: AdditionalInfo): SignUpSuccess =>
    newReducer(USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user, additionalInfo })
);
// Sign up Failed
export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    newReducer(USER_ACTION_TYPE.SIGN_UP_FAILED, error)
);

// Log out start
export const logOutStart = withMatcher(
  (): LogOutStart => newReducer(USER_ACTION_TYPE.LOG_OUT_START)
);
// Log out success
export const logOutSuccess = withMatcher(
  (): LogOutSuccess => newReducer(USER_ACTION_TYPE.LOG_OUT_SUCCESS)
);
// Log out failed
export const logOutFailed = withMatcher(
  (error: Error): LogOutFailed =>
    newReducer(USER_ACTION_TYPE.LOG_OUT_FAILED, error)
);
