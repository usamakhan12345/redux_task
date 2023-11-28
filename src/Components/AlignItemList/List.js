import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSelector  , useDispatch } from 'react-redux';
import {  addQty , lessQty  , deleteItems} from "../../Slices/Cart/Cart"
import { CiCirclePlus  , CiCircleMinus } from "react-icons/ci";
import Button from '../Atoms/Button/Button';





export default function AlignItemsList({Addtocart}) {
  const[ cartItems , setCartItems] = React.useState([])
  const [Alltotal, SetAlltotal]= React.useState("")


  const cartProducts = useSelector((state)=> state.cart.cart)
  const dispatch = useDispatch()


  React.useEffect(()=>{
    setCartItems(cartProducts)
  },[cartProducts])

React.useEffect(()=>{
 const total =  cartItems.reduce((a, b) =>  a + b.price ,0)
  console.log(total) 
  console.log(total)
  total.toFixed(2)
  SetAlltotal(total)

} , [cartItems])
 const AddQty = (v)=>{
  dispatch(addQty(v))

 }
 const lessqty = (v)=>{
  dispatch(lessQty(v))

 }
 const DeleteAllItem = ()=>{
  dispatch(deleteItems())

 }

 
 console.log(cartItems.length)
 console.log([...new Set(cartItems)])
  return (

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'  }}>
  
      <Divider varian="inset" component="li" />
      <div style={{display : 'flex' , justifyContent : 'center'}}>

      { cartItems.length ? <Button onClick={DeleteAllItem} style={{backgroundColor : 'red', color : '#fff' , fontWeight : 'bold'  , margin : '29px' , padding : '1  0px' , borderRadius : '30px'}} title={'Delete All'}/> : <Button style={{margin : '29px' , padding : '20px' , borderRadius : '30px'  , fontWeight : 'bold' }} title={"Empty card"}/> }
      </div>
    {cartItems.length && [...new Set(cartItems)].map((v,i)=>(
      <ListItem  alignItems="flex-start">
      <img style={{height :  '100px' , width : '100px'}}  src={v.image} />
      <ListItemText
              style={{ marginLeft : '20px'}}
      
        primary={v.category}
      
        secondary={
          <React.Fragment>
            <Typography
              style={{ marginLeft : '20px' , color : '#000'}}
            >
              Rs : {v.price}
            </Typography>
            <Typography style={{color : '#000' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}> 
                 Qty : <CiCirclePlus  onClick={()=> AddQty(v)}  style={{cursor : 'pointer' , fontSize : '22px' , marginRight : '10px'}}/>  {cartItems.length ? cartItems.filter((item)=> item.id === v.id ).length : 0 }  <CiCircleMinus onClick={()=>lessqty(v.id)}  style={{cursor : 'pointer' , fontSize : '22px' , marginLeft : '10px'}}/>
            </Typography> 
          </React.Fragment>
        }
      />
      </ListItem>
      
    ) 
    
    
    ) }
      <div style={{display : 'flex' , justifyContent : 'center'}} ><h1> Total {Alltotal ?  Alltotal : 0 }</h1> </div>
    </List>
  );
} 