import { newReducer } from "../../Utils/Reducer/Reducer";
import USER_ACTION_TYPE from "./User.types";

//Set user
export const setCurrentUser = (user) => (
  newReducer(USER_ACTION_TYPE.SET_USER, user)
);
