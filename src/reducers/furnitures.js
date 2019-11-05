import { ADD_NEW_FURNITURE } from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_FURNITURE:
      const newState = [...state];
      const { type, name, price, images, description } = action.overload;
      const furniture = newState.findIndex(cur => cur.type === type);
      if (furniture !== -1) {
        newState[furniture].collection.push({
          name,
          price,
          images,
          description
        });
      } else {
        newState.push({
          type,
          collection: [{ name, price, images, description }]
        });
      }
      return newState;
    default:
      return state;
  }
};
