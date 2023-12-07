import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import { productsActions } from '../actions/Products'

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
}


export const getProductsRequest = createAsyncThunk(
  "ProductsReducer/getProductsRequest",
  async (payload, thunkAPI) => {
    try {

      const response = await productsActions.getProduct(payload, thunkAPI)
      if (response) {
        return response
      }
    } catch (err) {
      console.log(err)
      // return rejectWithValue(err.response.data)
    }


  }
)

export const addToCart = (state,action)=>{
  console.log(state,action)

}
// export const addToCartRequest = createAsyncThunk(
//   "ProductsReducer/getProductsRequest",
//   async (payload, thunkAPI) => {
//     try {

//       const response = await productsActions.addtocart(payload, thunkAPI)
//       if (response) {
//         return response
//       }
//     } catch (err) {
//       console.log(err)
//       // return rejectWithValue(err.response.data)
//     }


//   }
// )

// export const addToCartRequest = ()=>{
//         const cartItem =   productsActions.addtocart()

//         return{
//           cartItem
//         }
// }

const ProductsReducer = createReducer(initialState, {

  [getProductsRequest.fulfilled]: (state, action) => {
    // console.log( action.payload.data)
    console.log(state)

    return {
      ...state,
      contents: [...action.payload.data]
    }
  },
  [getProductsRequest.rejected]: (state, action) => {
    console.log(state, action)
    return {

      // contents: [...action.payload.data]
        error: action?.error?.message
      // questions: null
    }
  },

  [getProductsRequest.pending]: (state) => {

    return {
      ...state,
      error: null
    }
  },
  // [addToCartRequest.fulfilled]: (state, action) => {
  //   console.log(state, action)
  //   return {

  //     cart: [...action.payload.data]
  //     //   error: action?.error?.message
  //     // questions: null
  //   }
  // },

  // [ addToCartRequest.pending]: (state) => {

  //   return {
  //     ...state,
  //     error: null
  //   }
  // },
 
})


export default ProductsReducer