import {
  convertCollectionsShanpshotToMap,
  firestore,
} from '../../firebase/firebase-utils';
import {
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} from './shop-types';

export const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFail = (errMsg) => {
  return {
    type: FETCH_COLLECTIONS_FAIL,
    payload: errMsg,
  };
};

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collMap = convertCollectionsShanpshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collMap));
      })
      .catch((err) => dispatch(fetchCollectionsFail(err.message)));
  };
};
