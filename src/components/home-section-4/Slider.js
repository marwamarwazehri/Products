import React ,{useRef}from 'react'
import './Sllider.css'
import {usePostContext} from '../../Context'
import { Link } from 'react-router-dom';
import Item from '../Item/Item'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";


const Slider = () => {
        const {trendNow}=usePostContext();

        const sliderRef = useRef(null);

  return (
    <div className='slider'>
        <h4 className='titleSlider'>Trending Now</h4>
        <div className='arrows'>
              <div className='arrow-item' onClick={() => sliderRef.current.scrollBy({ left: -100, behavior: 'smooth' })}><IoIosArrowRoundBack className='arr'/></div>
              <div className='arrow-item' onClick={() => sliderRef.current.scrollBy({ left: 100, behavior: 'smooth' })}><IoIosArrowRoundForward className='arr'/></div>
        </div>
        <div className='trending-slider' ref={sliderRef}>
                {trendNow.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className='link'>
                        <Item product={product} trending="true" />
                    </Link>
                ))}
            </div>

      
    </div>
  )
}

export default Slider
