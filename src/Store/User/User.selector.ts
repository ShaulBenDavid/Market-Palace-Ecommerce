import { createSelector } from "reselect";
// Types
import { RootState } from "../Store";
import { UserState } from "./User.reducer";

const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (user) => user.currentUser
);