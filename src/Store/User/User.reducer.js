import USER_ACTION_TYPE from "./User.types";

// Reducer state
export const INITIAL_STATE = {
    currentUser: null,
};
  
// Reducer
export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case USER_ACTION_TYPE.SET_USER:
        return {
          ...state,
          currentUser: payload,
        };
      default:
        return state;
    }
  };