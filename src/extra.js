<ListItem  alignItems="flex-start">
<MdDelete onClick={()=>delteItem(i)} style={{fontSize : '30px' , position : 'absolute' , right : '10px' , color  : 'red' , cursor : 'pointer' , objectFit : 'contain'}}/>
<img style={{height :  '100px' , width : '100px'}}  src={v.item.image} />
<ListItemText
        style={{ marginLeft : '20px'}}

  primary={v.item.category}

  secondary={
    <React.Fragment>
      <Typography
        style={{ marginLeft : '20px' , color : '#000'}}
      >
        Rs : {v.item.price}
      </Typography>
      <Typography style={{color : '#000' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}> 
           Qty :  <CiCirclePlus  onClick={()=> AddQty(v)}  style={{cursor : 'pointer' , fontSize : '22px' , marginRight : '10px'}}/>  {v.quantity}  <CiCircleMinus   style={{cursor : 'pointer' , fontSize : '22px' , marginLeft : '10px'}}/>
      </Typography> 
    </React.Fragment>
  }
/>
</ListItem>