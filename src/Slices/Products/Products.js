import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const getProduct = createAsyncThunk('products/getProduct', async () => {
    const response = await axios('https://fakestoreapi.com/products')

    // console.log(response.data)
    return response.data
}
)



const initialState = {
    contents: [],
    isLoading: false,
    error: null,
    cart: []
}

console.log(initialState.contents)

export const productSlice = createSlice({



    name: 'products',
    initialState,
    reducers: {
        addtocart: (state, action) => {
            console.log(action.payload)
            state.cart.push({ item: action.payload, quantity: 1 })

        },
        addUpdatedCart: (state, action) => {
            state.cart = [...action.payload]

        }


    },
    extraReducers(builder) {
        // console.log(builder)

        builder.addCase(getProduct.pending, (state) => {
            // console.log(state)
            state.isLoading = true
        })
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = [...action.payload]
            // console.log(action)
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message

        })
    },
})

export const { increment, productsget, addtocart, addUpdatedCart } = productSlice.actions


export default productSlice.reducer