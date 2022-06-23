import { configureStore, createSlice } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import uiSlice from './ui-slice'

const initialCartState = { items: {}, showCart: false }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart
    },
    addToCart(state, action) {
      state.items = state.items + action.payload
    },
    removeFromCart(state, action) {
      state.items = state.items - action.payload
    }
  }
})

export const cartActions = cartSlice.actions


const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer
  }
})

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
export default store