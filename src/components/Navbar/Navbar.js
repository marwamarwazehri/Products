import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { SiTrustedshops } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { IoCartSharp } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { usePostContext } from '../../Context';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [total, setTotal] = useState(0);
  const { cartnumberitems, setCartNumberItems, cartProduct, setCartProduct } = usePostContext();

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    if (cartProduct.length > 0) {
      totalPrice = cartProduct.reduce((acc, item) => acc + (item.totalPrice || 0), 0);
    }
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartProduct]);

  const handleRemoveItem = (id) => {
    const updatedCart = cartProduct.filter((item) => item.id !== id);
    setCartProduct(updatedCart);
    
  };

  const handleIncreaseQuantity = (id) => {
  const updatedCart = cartProduct.map((item) => {
    if (item.id === id) {
      const newQuantity = item.quantityProduct + 1;
      const totalPrice = item.price ? item.price * newQuantity : 0; // Check if item.price is defined
      console.log("New Quantity:", newQuantity);
      console.log("Total Price:", totalPrice);
      return { ...item, quantityProduct: newQuantity, totalPrice };
    }
    return item;
  });
  setCartProduct(updatedCart);
};

const handleDecreaseQuantity = (id) => {
  const updatedCart = cartProduct.map((item) => {
    if (item.id === id && item.quantityProduct > 1) {
      const newQuantity = item.quantityProduct - 1;
      const totalPrice = item.price ? item.price * newQuantity : 0; // Check if item.price is defined
      console.log("New Quantity:", newQuantity);
      console.log("Total Price:", totalPrice);
      return { ...item, quantityProduct: newQuantity, totalPrice };
    }
    return item;
  });
  setCartProduct(updatedCart);
};


  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <Link to="/" className='navbar-link'>
          <h4>Ra<SiTrustedshops className='navbar-icon' />uf</h4>
        </Link>
      </div>

      <div className='navbar-links'>
        <Link to="/categories" className='navbar-link-2'>CATEGORIES</Link>
        <Link to="/productpage/4" className='navbar-link-2'>PRODUCTPAGE</Link>
        <IoCartSharp className='cart' onClick={() => setOpenCart(true)} />
        <p>{cartProduct.length}</p>
      </div>

      {openCart && <motion.div className='cartopen'
      initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ y: '-100%', transition: { duration: 0.3 } }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25, duration: 0.4 }}
       >
        <div className='cartopen-title'>
          <h4>Your Shopping Cart[{cartProduct.length}]</h4>
          <IoCloseSharp className='close-cart' onClick={() => setOpenCart(false)} />
        </div>
        <div className='cart-items'>
          {cartProduct.map((item) => (
            <div key={item.id} className='single-item'>
              <div className='single-item-title'>
                <img src={item.image} alt={item.name} />
              </div>
              <div className='single-item-midail'>
                <span>{item.name}</span>
                <div className='single-item-midail-btn'>
                  <button className='btn-right' onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <button className='btn-main'>{item.quantityProduct}</button>
                  <button className='btn-left' onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <div className='single-item-last'>
                <h5>{item.totalPrice}$</h5>
                <IoCloseSharp className='cancel-item' onClick={() => handleRemoveItem(item.id)} />
              </div>
            </div>
          ))}
        </div>

        <div className='allTotal'>
          <div>
          <h2>Subtotal</h2>
          <p>{total}$</p>
          </div>
          {cartProduct.length>0 && <button className='checkout'>Proceed to Checkout</button>}
        </div>
      </motion.div>}

      <div className='res' >
        <IoCartSharp className='cart' onClick={() => setOpenCart(true)} />
        <p>{cartProduct.length}</p>
        <RxHamburgerMenu className={sideBar ? 'res-icon hide' : 'res-icon'} onClick={toggleSideBar} />
      </div>

      <div className={sideBar ? 'res-links open ' : 'res-links hidden'}>
        <IoCloseSharp className='cancel' onClick={() => setSideBar(false)} />
        <Link to="/categories" className='navbar-link-2'>CATEGORIES</Link>
        <Link to="/productpage" className='navbar-link-2'>PRODUCTPAGE</Link>
      </div>
    </div>
  );
}

export default Navbar;
