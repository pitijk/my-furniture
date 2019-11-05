import { ADD_NEW_FURNITURE } from "../types";

export const addFurnitureType = (type, name, price, images, description) => {
  return {
    type: ADD_NEW_FURNITURE,
    overload: {
      type,
      name,
      price,
      images,
      description
    }
  };
};
