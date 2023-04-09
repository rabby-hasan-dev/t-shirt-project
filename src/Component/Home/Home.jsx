import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            toast('You have already added this T-Shirt');

        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }

    const handleRemoveCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }



    return (
        <div className='home-container'>
            <div className="thsirt-container">
                {
                    tShirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveCart={handleRemoveCart}
                    cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Home;