import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';
import { GOOGLE_SIGN_IN_START } from './user-types';
import { googleProvider } from '../../firebase/firebase-utils';
import { googleSignInFail, googleSignInSuccess } from './user-actions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }),
    );
  } catch (error) {
    yield put(googleSignInFail(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
