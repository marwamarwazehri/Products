import React from 'react'
import './ProudOf.css'
import {usePostContext} from '../../Context'
import Item from '../Item/Item'
import { Link } from 'react-router-dom';

const ProudOf = () => {

const {proudOf}=usePostContext();
 

return (
    <div className='proud'>
       <h4 className='title'>Products we are proud of</h4>
     
    
        <div className='proud-products'>
                {proudOf.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className='link'>
                        <Item product={product} />
                    </Link>
                ))}
            </div>
            

      
    </div>
  )
}

export default ProudOf
