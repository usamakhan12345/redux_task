import axios from "axios"



async function getProduct(payload, thunkAPI) {
    try {
      const response = await axios('https://fakestoreapi.com/products')
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
  

//   async function addtocart(payload , thunkAPI) {
//     try {
//         const response = await axios('https://fakestoreapi.com/products')
//         return response
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error)
//       }
//   }
  

  
  export const productsActions = {
    getProduct,
    // addtocart
  } 