import './App.css';
import DrawerAppBar from './Components/Header/Header'
import { useEffect, useState } from 'react';
import Card from './Components/Elements/Card/Card'
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import { getProductsRequest } from './Store/reducers/Product'
import { addToCartRequest } from './Store/reducers/Cart'

function App({ products, getProducts, addcart, carts }) {
  const [Allproducts, setAllProducts] = useState([])
  const [cartPorducts, setCartProducts] = useState([])
  const [cookies, setCookie , removeCookie , get ] = useCookies(['name']);

  useEffect(() => {
    setCartProducts(carts.cart)
    setCookie('name', "usama");
    // removeCookie('test1', "Hello")
   
  }, [])

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    setAllProducts(products.contents)
  }, [products])

  const Addtocart = (item) => {
    addcart(item)

  }
  return (
    <div>
      <DrawerAppBar Addtocart={Addtocart} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

        {Allproducts.map((v, i) => (

          <Card onClick={() => Addtocart(v)} key={i} carddata={v} />
        ))}
      </div>
    </div>

  );
}
function mapStateToProps(state) {
  console.log(state)
  return {
    products: state.products,
    carts: state.cart
  }

}


function mapDispatchToProps(dispatch) {
  // console.log(dispatch)
  return {
    getProducts: () => dispatch(getProductsRequest()),
    addcart: (item) => dispatch(addToCartRequest(item))

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App)
