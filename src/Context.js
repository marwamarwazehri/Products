import React, { createContext, useState, useContext, useEffect } from 'react';
import { data } from './data';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [stuffs, setStuffs] = useState(data);
    const [trendNow, setTrendNow] = useState([]);
    const [proudOf, setProudOf] = useState([]);
    const [cartnumberitems, setCartNumberItems] = useState(0);
    const [cartProduct, setCartProduct] = useState([]);
    
    const trendy = () => {
    const trendingStuff = stuffs.filter((stuff) => stuff.trendingNow === true);
    console.log("Trending Stuff:", trendingStuff); 
    setTrendNow(trendingStuff);
}

const proudy = () => {
    const proudStuff = stuffs.filter((stuff) => stuff.proud === true);
    console.log("Proud Stuff:", proudStuff); 
    setProudOf(proudStuff);
}

    useEffect(() => {
        trendy();
        proudy();
    }, []);

 
    return (
        <PostContext.Provider value={{
            trendNow,
            proudOf,
            stuffs,
            cartProduct, 
            setCartProduct,
            cartnumberitems,
             setCartNumberItems
        }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePostContext = () => useContext(PostContext);
