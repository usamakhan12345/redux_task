import React from 'react'
import './style.css'

const Button = ({title , style , onClick}) => {
  return (
    <>
    <button onClick={onClick} style={style} className='btn'>{title}</button>
    </>
  )
}

export default Button