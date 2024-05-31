import React from 'react';
import './ShopNow.css';
import designimg from '../../images/design.jfif';
import library from '../../images/library.jpg';


const ShopNow = ({ check }) => {
    return (
        !check ? (
            <div className='shopnow'>
                <div className='shop-left'>
                    <h1>Creative harmonious living</h1>
                    <p>Raouf products are all made to standard sizes so that you can mix and match them freely</p>
                    <button>SHOP NOW</button>
                </div>
                <div className='shop-right'>
                    <img src={designimg} alt="Design" />
                </div>
            </div>
        ) : (
            <div className='shopnow  shopnowadd'>
                
                <div className='shop-right'>
                    <img src={library} alt="Design" className='library' />
                </div>
                <div className='shop-left'>
                    <h1>Comfortable Q Elegante Living</h1>
                    <p>Raouf Products are all made to standard sizes so that
                      you can mix and match them freely</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
        ) 
    );
}

export default ShopNow;
