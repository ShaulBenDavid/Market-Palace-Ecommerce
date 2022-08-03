import { all, takeLatest, put, call } from "redux-saga/effects";
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  signInUserAuthWithEmailAndPassword,
  signInWithGooglePopup,
  createUserAuthWithEmailAndPassword,
  signOutUser,
} from "../../Utils/FireBase/FIreBase";
import {
  logInFailed,
  logInSuccess,
  logOutFailed,
  logOutSuccess,
  signUpFailed,
  signUpSuccess,
} from "./User.action";

import USER_ACTION_TYPE from "./User.types";

// Check user exist and manage the login
export function* getUserSnapshot(user, additionalInfo) {
  try {
    const snapshot = yield call(
      createUserDocumentFromAuth,
      user,
      additionalInfo
    );
    yield put(logInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(logInFailed(error));
  }
}

// Google auth
export function* googleLogInAuth() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getUserSnapshot, user);
  } catch (error) {
    yield put(logInFailed(error));
  }
}
// signInUserAuthWithEmailAndPassword
// Email auth
export function* emailLogInAuth({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInUserAuthWithEmailAndPassword,
      email,
      password
    );
    yield call(getUserSnapshot, user);
  } catch (error) {
    yield put(logInFailed(error));
  }
}
// Check auth
export function* checkIfUserAuth() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getUserSnapshot, userAuth);
  } catch (error) {
    yield put(logInFailed(error));
  }
}

// Sign up
export function* signUpAuth({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createUserAuthWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}
// Log In After Sign Up
export function* logInAfterSignUp({ payload: { user, additionalInfo } }) {
  try {
    yield call(getUserSnapshot, user, additionalInfo);
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

// Log out
export function* logOutUser() {
  try {
    yield call(signOutUser);
    yield put(logOutSuccess());
  } catch (error) {
    yield put(logOutFailed(error));
  }
}

// ----listeaners----
// Checking
export function* onUserCheckSession() {
  yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, checkIfUserAuth);
}
// Google
export function* onGoogleLogIn() {
  yield takeLatest(USER_ACTION_TYPE.GOOGLE_LOG_IN_START, googleLogInAuth);
}
// Email
export function* onEmailLogIn() {
  yield takeLatest(USER_ACTION_TYPE.EMAIL_LOG_IN_START, emailLogInAuth);
}
// Sign up
export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUpAuth);
}
// Log in after sign up
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, logInAfterSignUp);
}
// Log Out start
export function* onUserLogOut() {
  yield takeLatest(USER_ACTION_TYPE.LOG_OUT_START, logOutUser);
}

export function* userSaga() {
  yield all([
    call(onUserCheckSession),
    call(onGoogleLogIn),
    call(onEmailLogIn),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onUserLogOut),
  ]);
}
