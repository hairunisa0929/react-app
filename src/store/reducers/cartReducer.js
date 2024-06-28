import { ADD_TO_CART } from "../types";

const initialState = {
  dataCart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const foundIndex = state.dataCart.findIndex(
        (item) => item.id === action.payload.id
      );

      const newItems = [...state.dataCart];
      if (foundIndex !== -1) {
        newItems[foundIndex] = {
          ...action.payload,
          qty: newItems[foundIndex].qty + action.payload.qty,
        };
      } else {
        newItems.push({ ...action.payload });
      }

      return { ...state, dataCart: newItems };
    default:
      return state;
  }
};

export default cartReducer;
