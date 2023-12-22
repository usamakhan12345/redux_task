import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import { cartActions } from '../actions/Cart'

const initialState = {
  isLoading: false,
  error: null,
  cart: []
}




export const addToCartRequest = createAsyncThunk(
  "CartReducer/addToCartRequest",
        (payload, thunkAPI) => {
     return  payload

  }
)

export const addQuantity = createAsyncThunk(
  "CartReducer/addQuantity",
  async(payload) => {
    return payload
  }
)

export const LessQuantity = createAsyncThunk(
  'CartReducer/LessQuantity',
  async(payload) => {
    return payload
  }
)

export const  DeleteAllCarts = createAsyncThunk(
  'CartReducer/DeleteAllCarts',
  async(payload)=>{
    return payload
  }
)


const CartReducer = createReducer(initialState, {

 

 
  [addToCartRequest.fulfilled]: (state, action) => {
    console.log(action.payload)
    console.log(state.isLoading)
    return {
      ...state,
       cart : [ ...state.cart ,action.payload]
     
    }
  },

  [ addToCartRequest.pending]: (state) => {

    return {
      ...state,
      error: null
    }
  },
  [addQuantity.fulfilled]: (state, action) => {
    console.log(action.payload)
    console.log(state.isLoading)
    // state.cart.push(action.payload)
    return {
      ...state,
       cart : [ ...state.cart ,action.payload]
       
    }
  },

  [ addQuantity.pending]: (state) => {

    return {
      ...state,
      error: null
    }
  },
  [LessQuantity.fulfilled]: (state, action) => {
    // console.log(action.payload)
    
    //  state.cart.splice(state.cart.indexOf(state.cart.find((item) => item.id === action.payload)), 1)
      // const cartItem = [...state.cart]
      console.log(action.payload)
    return {
      ...state,
      // cart : filteredCart
      // cart : action.payload
       
    }
  },

  [ LessQuantity.pending]: (state) => {

    return {
      ...state,
      error: null
    }
  },
  [DeleteAllCarts.fulfilled]: (state, action) => {
    console.log(action.payload)
    
    return {
      ...state,
      cart : []
       
    }
  },

  [ DeleteAllCarts.pending]: (state) => {

    return {
      ...state,
      error: null
    }
  },
 
})


export default CartReducer