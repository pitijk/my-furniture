import { ADD_TO_CART, DELETE_FROM_CART, EDIT_QUANTITY } from "../types";

export default (state = { totalValue: 0, records: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let newState = { ...state };
      let { name, price, quantity } = action.overload;
      const itemIndex = state.records.findIndex(cur => cur.name === name);
      console.log(itemIndex);
      itemIndex === -1
        ? newState.records.push(action.overload)
        : (newState.records[itemIndex].quantity += quantity);
      newState.totalValue += price * quantity;
      return newState;
    case DELETE_FROM_CART:
      newState = { ...state };
      const index = state.records.findIndex(cur => cur.name === action.name);
      newState.totalValue -=
        state.records[index].price * state.records[index].quantity;
      newState.records.splice(index, 1);
      return newState;
    case EDIT_QUANTITY:
      newState = { ...state };
      const i = state.records.findIndex(cur => cur.name === action.name);
      const quantityDifference = action.quantity - state.records[i].quantity;
      newState.totalValue += quantityDifference * state.records[i].quantity;
      newState.records[i].quantity = action.quantity;
      return newState;
    default:
      return state;
  }
};
