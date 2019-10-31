import { ADD_NEW_FURNITURE } from "../types";

export const addFurnitureType = (type, name, images, description) => {
  return {
    type: ADD_NEW_FURNITURE,
    overload: {
      type,
      name,
      images,
      description
    }
  };
};
