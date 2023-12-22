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

 
})


export default ProductsReducer