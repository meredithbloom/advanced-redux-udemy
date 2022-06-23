import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialCartState = { items: [], totalQuantity: 0 }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      if (!existingItem) {
        state.items.push()
      }
    },
    removeFromCart(state, action) {
      state.items = state.items - action.payload
    }
  }
})

export const cartActions = cartSlice.actions

