import React from 'react'
import './ProductPage.css'
import ItemPage from '../ItemPage/ItemPage'
import Slider from '../../components/home-section-4/Slider'

const ProductPage = () => {
  return (
    <div className='productPage'>
      <ItemPage/>
      <Slider/>
    </div>
  )
}

export default ProductPage
