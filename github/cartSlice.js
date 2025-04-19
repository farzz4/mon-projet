import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalQuantity += 1;
        state.totalPrice += newItem.price;
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      item.quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;