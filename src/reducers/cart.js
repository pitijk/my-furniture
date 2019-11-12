import { ADD_TO_CART, DELETE_FROM_CART, EDIT_QUANTITY } from "../types";

export default (state = { totalValue: 0, products: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newState = { ...state };
      const { name, price, quantity } = action.overload;

      const itemIndex = state.products.findIndex(cur => cur.name === name);
      itemIndex === -1
        ? newState.products.push(action.overload)
        : (newState.products[itemIndex].quantity += quantity);

      newState.totalValue += price * quantity;
      return newState;
    case DELETE_FROM_CART:
      const newState1 = { ...state };

      const index = state.products.findIndex(cur => cur.name === action.name);
      newState1.totalValue -=
        state.products[index].price * state.products[index].quantity;

      newState1.products.splice(index, 1);
      return newState1;
    case EDIT_QUANTITY:
      const newState2 = { ...state };

      const i = state.products.findIndex(cur => cur.name === action.name);

      const quantityDifference = action.quantity - state.products[i].quantity;
      newState2.totalValue += quantityDifference * state.products[i].quantity;
      newState2.products[i].quantity = action.quantity;

      return newState2;
    default:
      return state;
  }
};
