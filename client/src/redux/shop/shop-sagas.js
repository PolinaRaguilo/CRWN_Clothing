import { call, put, takeEvery } from 'redux-saga/effects';
import {
  convertCollectionsShanpshotToMap,
  firestore,
} from '../../firebase/firebase-utils';
import { fetchCollectionsFail, fetchCollectionsSuccess } from './shop-actions';
import { FETCH_COLLECTIONS_START } from './shop-types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsShanpshotToMap,
      snapshot,
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsFail(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
