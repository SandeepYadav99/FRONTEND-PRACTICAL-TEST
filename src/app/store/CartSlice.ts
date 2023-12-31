import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Item {
  id: number;
  name: string;
  quantity: number;
  des: string;
  price: number;
  maxQuantity: number;
}

interface CartState {
  items: Item[];
  subtotal: number;
}

const initialState: CartState = {
  items: [],
  subtotal: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        if (existingItem.quantity < existingItem.maxQuantity) {
          existingItem.quantity += 1;
          state.subtotal += existingItem.price;
        }
      } else {
        if (newItem.quantity < newItem.maxQuantity) {
          newItem.quantity = 1;
          state.items.push(newItem);
          state.subtotal += newItem.price;
        }
      }
    },

    removeToCart: (
      state,
      action: PayloadAction<{ itemId: number; quantity: number }>
    ) => {
      const { itemId, quantity } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        if (quantity <= item.maxQuantity) {
          state.subtotal += (quantity - item.quantity) * item.price;
          item.quantity = quantity;
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.subtotal = 0;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
