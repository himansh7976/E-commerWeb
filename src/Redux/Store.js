import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './Features/Cartslice'

 const store = configureStore({
  reducer: {
    Cart: CartSlice.reducer,
   
  },
})  

export default store;