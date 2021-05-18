import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './cart-types';

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