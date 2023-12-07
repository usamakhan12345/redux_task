import './App.css';
import DrawerAppBar from './Components/Header/Header'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './Components/Elements/Card/Card'
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from "./Slices/Products/Products"
// import { addtocart, addUpdatedCart } from './Slices/Cart/Cart'

import {getProductsRequest } from './Store/reducers/Product'
import {addToCartRequest} from './Store/reducers/Cart'

function App() {
  const [products, setProducts] = useState([])
  const [cartPorducts, setCartProducts] = useState([])

   const dispatch = useDispatch()
  const myproducts = useSelector((state) => state.products.contents)
  const carts = useSelector((state) => state.cart.cart)
  console.log(carts)

  useEffect(() => {

    dispatch(getProductsRequest())
}, [])


  const Addtocart = (item ) => {

    dispatch(addToCartRequest(item))
    
  }

  
  useEffect(() => {
    setProducts(myproducts)
    // setCartProducts(carts)
    
 }, [myproducts ])

  console.log(products)
  return (
    <div>
      <DrawerAppBar Addtocart={Addtocart} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

        {products.map((v, i) => (

          <Card onClick={() => Addtocart( v)} key={i} carddata={v} />
        ))}
      </div>
    </div>
  );
}

export default App;
