// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   cart: []
// }






// export const CartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addtocart: (state, action) => {
//       state.cart.push(action.payload)

//     },

//     lessQty: (state, action) => {
//       state.cart.splice(state.cart.indexOf(state.cart.find((item) => item.id === action.payload)), 1)
//       console.log(action.payload)
//     },
//     addQty: (state, action) => {
//       state.cart.push(action.payload)

//     },
//     deleteItems: (state, action) => {

//       console.log("delete item")
//       state.cart = []

//     }, 
   

//   },
// })

// export const { addtocart, addUpdatedCart, addQty, lessQty, deleteItems } = CartSlice.actions

// export default CartSlice.reducer