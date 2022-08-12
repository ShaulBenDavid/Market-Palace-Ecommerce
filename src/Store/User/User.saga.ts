import { all, takeLatest, put, call } from "typed-redux-saga/macro";
import { User } from "firebase/auth";
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
  EmailLogInStart,
  SignUpStart,
  SignUpSuccess,
} from "./User.action";
// Types
import USER_ACTION_TYPE from "./User.types";
import { AdditionalInfo } from "../../Utils/FireBase/FIreBase";
// Check user exist and manage the login
export function* getUserSnapshot(
  userAuth: User,
  additionalInfo?: AdditionalInfo
) {
  try {
    const snapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );
    if (snapshot) {
      yield* put(logInSuccess({ id: snapshot.id, ...snapshot.data() }));
    }
  } catch (error) {
    yield* put(logInFailed(error as Error));
  }
}

// Google auth
export function* googleLogInAuth() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getUserSnapshot, user);
  } catch (error) {
    yield* put(logInFailed(error as Error));
  }
}
// signInUserAuthWithEmailAndPassword
// Email auth
export function* emailLogInAuth({
  payload: { email, password },
}: EmailLogInStart) {
  try {
    const userCredential = yield* call(
      signInUserAuthWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      yield call(getUserSnapshot, userCredential.user);
    }
  } catch (error) {
    yield* put(logInFailed(error as Error));
  }
}
// Check auth
export function* checkIfUserAuth() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getUserSnapshot, userAuth);
  } catch (error) {
    yield* put(logInFailed(error as Error));
  }
}

// Sign up
export function* signUpAuth({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createUserAuthWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      yield* put(signUpSuccess(userCredential.user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}
// Log In After Sign Up
export function* logInAfterSignUp({
  payload: { user, additionalInfo },
}: SignUpSuccess) {
  try {
    yield* call(getUserSnapshot, user, additionalInfo);
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

// Log out
export function* logOutUser() {
  try {
    yield* call(signOutUser);
    yield* put(logOutSuccess());
  } catch (error) {
    yield* put(logOutFailed(error as Error));
  }
}

// ----listeaners----
// Checking
export function* onUserCheckSession() {
  yield* takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, checkIfUserAuth);
}
// Google
export function* onGoogleLogIn() {
  yield* takeLatest(USER_ACTION_TYPE.GOOGLE_LOG_IN_START, googleLogInAuth);
}
// Email
export function* onEmailLogIn() {
  yield* takeLatest(USER_ACTION_TYPE.EMAIL_LOG_IN_START, emailLogInAuth);
}
// Sign up
export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUpAuth);
}
// Log in after sign up
export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, logInAfterSignUp);
}
// Log Out start
export function* onUserLogOut() {
  yield* takeLatest(USER_ACTION_TYPE.LOG_OUT_START, logOutUser);
}

export function* userSaga() {
  yield* all([
    call(onUserCheckSession),
    call(onGoogleLogIn),
    call(onEmailLogIn),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onUserLogOut),
  ]);
}
