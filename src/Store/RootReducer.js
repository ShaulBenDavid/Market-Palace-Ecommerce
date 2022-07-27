import { combineReducers } from "redux";
import { categoriesReducer } from "./Categories/Categories.reducer";

import { userReducer } from "./User/User.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
});