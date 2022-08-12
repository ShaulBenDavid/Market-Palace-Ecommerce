import { AnyAction } from "redux";
import { UserDate } from "../../Utils/FireBase/FIreBase";

import {
  logInFailed,
  signUpFailed,
  logOutFailed,
  logInSuccess,
  logOutSuccess,
} from "./User.action";
// Types
export type UserState = {
  readonly currentUser: UserDate | null;
  readonly error: Error | null;
};
// Reducer state
export const INITIAL_STATE: UserState = {
  currentUser: null,
  error: null,
};

// Reducer
export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (logInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (logOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  if (
    signUpFailed.match(action) ||
    logOutFailed.match(action) ||
    logInFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
};
