import { combineReducers } from '@reduxjs/toolkit'
import ProductReducer  from './Product'
import CartReducer from './Cart'



export const rootReducer = combineReducers({
    products : ProductReducer,
    cart : CartReducer
})