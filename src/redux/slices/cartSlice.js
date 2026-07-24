import { createSlice } from "@reduxjs/toolkit";

function recalculateTotals(state) {
  state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
  state.totalPrice = parseFloat(
    state.items
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2)
  );
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      recalculateTotals(state);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      recalculateTotals(state);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (quantity < 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        const item = state.items.find((item) => item.id === id);
        if (item) item.quantity = quantity;
      }
      recalculateTotals(state);
    },
    clearCart(state) {
      state.items = [];
      recalculateTotals(state);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
