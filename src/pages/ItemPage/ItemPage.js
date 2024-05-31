import React, { useEffect, useState } from 'react';
import './ItemPage.css';
import { usePostContext } from '../../Context';
import { useParams } from 'react-router-dom';

const ItemPage = () => {
  const { stuffs ,cartProduct, setCartProduct,cartnumberitems,
             setCartNumberItems} = usePostContext();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantityProduct, setQuantityProduct] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const [cpro, setCpro] = useState({});


  useEffect(() => {
    const selectedItem = stuffs.find(item => item.id === parseInt(id));
    setItem(selectedItem);
    setSelectedImage(selectedItem.images[0]);
    setTotalPrice(selectedItem.price);
    }, [id, stuffs]);


  

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleDecreaseQuantity = () => {
    if (quantityProduct > 1) {
      setQuantityProduct(quantityProduct - 1);
      setTotalPrice(item.price * (quantityProduct - 1));
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantityProduct(quantityProduct + 1);
    setTotalPrice(item.price * (quantityProduct + 1));
  };


 const handleAddToCart = () => {
  const itemExists = cartProduct.some(cartItem => cartItem.id === item.id);
  if (itemExists) {
    
   alert("This item is already in your cart. Please adjust the quantity from the cart.");

  } else {
      const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.images[0],
      totalPrice: totalPrice,
      quantityProduct: quantityProduct
    };
    setCartProduct([...cartProduct, newItem]);
    
  }
};


  return (
    <div>
      {item && (
        <div className='itemproduct'>
          <h4>{item.name}</h4>
          <div className='itemproduct-medial'>
            <div className='medial-left'>
              <img src={selectedImage} className='main-image'/>
              <div className='medial-left-img'>
               {item.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className={selectedImage === image ? 'active' : ''}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
            </div>

            <div className='medial-right'>
              <p>{item.description}</p>
              <div className='quantity'>
                <h5>Quantity</h5>
                <div className='quantity-boxes'>
                  <button className='btn-right' onClick={handleDecreaseQuantity}>-</button>
                   <button>{quantityProduct}</button>
                   <button className='btn-left' onClick={handleIncreaseQuantity}>+</button>
                </div>
                <h5>{totalPrice}$</h5>
              </div>
              <div className='medial-buttons'>
                <button className='cart-btn' onClick={handleAddToCart}>ADD TO CART</button>
                <button className='buy-btn'>BUY NOW</button>
              </div>
            </div>

        </div>


        <div className='itemproduct-bottom'>
          <div className='itemproduct-bottom-item'>
            <h5>Texture:</h5>
            <p>{item.texture}</p>
          </div>

          <div className='itemproduct-bottom-item'>
            <h5>Weight:</h5>
            <p>{item.weight}</p>
          </div>

          <div className='itemproduct-bottom-item'>
            <h5>Size:</h5>
            <p>{item.size}</p>
          </div>
        </div>

          
         
        </div>
      )}
    </div>
  );
};

export default ItemPage;
