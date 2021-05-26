export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeOneItem = (cartItems, cartItemId) => {
  const existingItem = cartItems.find((item) => item.id === cartItemId);

  if (existingItem.quantity === 1) {
    return cartItems.filter((itemCart) => itemCart.id !== cartItemId);
  }
  return cartItems.map((item) =>
    item.id === cartItemId ? { ...item, quantity: item.quantity - 1 } : item,
  );
};
