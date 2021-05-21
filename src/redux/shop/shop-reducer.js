import {
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} from './shop-types';

const initialState = {
  collections: null,
  isFetching: false,
  errMessage: undefined,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
