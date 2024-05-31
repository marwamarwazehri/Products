import React from 'react'
import './Item.css'

const Item = ({product, trending}) => {
  return (
    <div className='item'>
      <img src={product.images[0]} className={trending && 'trendImg'}/>
      <p className={trending && 'trendName'}>{product.name}</p>
      <h4>{product.price}$</h4>
    </div>
  )
}

export default Item
