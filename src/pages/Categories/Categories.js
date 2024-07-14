import React, {useState}from 'react'
import './Categories.css'
import {usePostContext} from '../../Context'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Item from '../../components/Item/Item'


const Categories = () => {
  const {stuffs}=usePostContext();
  const [selectedCategory, setSelectedCategory] = useState('All');

   const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredStuffs = selectedCategory === 'All' ? stuffs : stuffs.filter(item => item.category === selectedCategory);

  
  
  return (
    <div className='categories'>
      <div className='cat-1'>
        <h1>{selectedCategory}</h1>
      </div>

<div className='category-data-btn'>
<div className='wrap'>
  <div className='cat-2'>
        <button onClick={() => handleCategoryClick('All')}>All</button>
        <button onClick={() => handleCategoryClick('Furniture')}>Furnitures</button>
        <button  onClick={() => handleCategoryClick('Electronics')}>Electronics</button>
        <button onClick={() => handleCategoryClick('Lamps')}>Lamps</button>
        <button onClick={() => handleCategoryClick('Kitchen')}>Kitchen</button>
        <button onClick={() => handleCategoryClick('Chairs')}>Chairs</button>
        <button onClick={() => handleCategoryClick('Skin Care')}>Slin Care</button>
        
      </div>

      </div>

      <div className='categories-products'>
                {filteredStuffs.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className='linkc'>
                        <Item product={product} />
                    </Link>
                ))}
            </div>
            </div>

      
    </div>

  )
}

export default Categories
