import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Item {
  id: number;
  name: string;
  quantity: number;
  des: string;
  price: number;
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
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
      state.subtotal += newItem.price * newItem.quantity;
    },
    removeToCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const index = state.items.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        const itemToRemove = state.items[index];
        state.items.splice(index, 1);
        state.subtotal -= itemToRemove.price * itemToRemove.quantity;
      }
    },

    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ itemId: number; quantity: number }>
    ) => {
      const { itemId, quantity } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        state.subtotal += (quantity - item.quantity) * item.price;
        item.quantity = quantity;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
