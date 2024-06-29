import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const id = action.payload.id;
      const existingItem = state.dataCart.find((item) => item.id === id);

      if (existingItem) {
        state.dataCart.forEach((item) => {
          if (item.id === id) {
            item.quantity += 1;
          }
        });
      } else {
        state.dataCart.push({ ...action.payload, quantity: 1 });
      }
    }
  },
});

export const { addItem } =
  cartSlice.actions;
export default cartSlice.reducer;