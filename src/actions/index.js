import {
  ADD_NEW_FURNITURE,
  ADD_TO_CART,
  DELETE_FROM_CART,
  EDIT_QUANTITY
} from "../types";

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

export const addToCart = (name, img, price, quantity) => {
  return {
    type: ADD_TO_CART,
    overload: {
      name,
      img,
      price,
      quantity
    }
  };
};

export const deleteFromCart = name => {
  return {
    type: DELETE_FROM_CART,
    name
  };
};

export const editQuantity = (name, quantity) => {
  return {
    type: EDIT_QUANTITY,
    name,
    quantity
  };
};
