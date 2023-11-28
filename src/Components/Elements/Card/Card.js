import React from 'react'
import './style.css'
import Button from '../../Atoms/Button/Button'
const  Card = ({carddata , onClick}) => {
  return (
    <>
    <div className='card-container'>

        <div className='card'>
        <img className='card-image' src={carddata.image} />   
        <h3 className='category'>{carddata.category}</h3>
        <h5 className='title'>{carddata.title}</h5>
        <h3> Rs :  {carddata.price}/-</h3>
        <div  className='btnContainer'>
            <Button onClick={onClick}  title={'Add to cart'}/>   <Button  title={'See Details'}/>  
        </div>
        </div>
  
    </div>
    </>
  )
}

export default Card