export const recoverdCartItemsFromLocalStorage = () => {
  if (!JSON.parse(localStorage.getItem('cart_items'))) {
    localStorage.setItem('cart_items', JSON.stringify([]));
  }
  const data = (JSON.parse(localStorage.getItem('cart_items')));
  return data;
};

export const saveCartItemsInLocalStorage = (cartItems) => {
  if (!JSON.parse(localStorage.getItem('cart_items'))) {
    localStorage.setItem('cart_items', JSON.stringify(cartItems));
  } else {
    localStorage.setItem('cart_items', JSON.stringify(cartItems));
  }
};
