import {
  ADD_ITEM,
  CLEAR_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
} from './cart-types';

export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};

export const addToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (id) => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: id,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
