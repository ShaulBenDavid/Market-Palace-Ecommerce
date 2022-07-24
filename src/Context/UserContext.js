import { useEffect, createContext, useReducer } from "react";
import { newReducer } from "../Utils/Reducer/Reducer";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../Utils/FireBase/FIreBase";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});
// Reducer type
const USER_ACTION_TYPE = {
  SET_USER: "SET_USER",
};
// REducer state
export const INITIAL_STATE = {
  currentUser: null,
};
// Reducer
const userReducer = (state, action) => {
    const { type, payload } = action;
    console.log(action)

  switch (type) {
    case USER_ACTION_TYPE.SET_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`unable to handle ${type} in user reducer`);
  }
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(() => null);
  const [{ currentUser }, dispacth] = useReducer(userReducer, INITIAL_STATE);
    //Set user 
  const setCurrentUser = (user) => {
    dispacth(newReducer(USER_ACTION_TYPE.SET_USER, user));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  const value = { currentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
