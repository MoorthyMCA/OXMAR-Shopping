// handleCart.js

const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADD_CART": {
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const productToAdd = { ...product, qty: 1 };
        return [...state, productToAdd];
      }
    }

    case "REMOVE_CART": {
      const existToRemove = state.find((x) => x.id === product.id);
      if (existToRemove.qty === 1) {
        return state.filter((x) => x.id !== existToRemove.id);
      } else {
        return state.map((x) =>
          x.id === existToRemove.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    }

    default:
      return state;
  }
};

export default handleCart;
