import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
  name: 'Cart',
  initialState: [],

  //redudes main functon k
  reducers: {
    CartAdd: (state, action) => {

      const productadd = action.payload;
      const existinproduct = state.find((item) => item.id == productadd.id);

      if (existinproduct) {
        existinproduct.quantity += 1;
      }
      else {
        state.push({
          ...productadd,
          quantity: 1
        });
      }


    },

  },
})

export const { CartAdd } = CartSlice.actions
export default CartSlice;