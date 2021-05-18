import { SET_CURRENT_USER } from '../constants';

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
