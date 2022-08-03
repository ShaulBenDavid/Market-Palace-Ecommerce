import USER_ACTION_TYPE from "./User.types";

// Reducer state
export const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

// Reducer
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.LOG_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPE.LOG_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TYPE.LOG_IN_FAILED:
    case USER_ACTION_TYPE.SIGN_UP_FAILED:
    case USER_ACTION_TYPE.LOG_OUT_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
