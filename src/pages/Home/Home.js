import React from 'react';
import './Home.css';
import Intro from '../../components/home-section1/Intro';
import ProductOf from '../../components/home-section-2/ProudOf';
import ShopNow from '../../components/home-section-3/ShopNow';
import Slider from '../../components/home-section-4/Slider';

const Home = () => {
    return (
        <div className='home'>
            <Intro/>
            <ProductOf/>
            <ShopNow check={false}/>
            <Slider/>
          <ShopNow check={true}/>
          
        </div>
    );
}

export default Home;
