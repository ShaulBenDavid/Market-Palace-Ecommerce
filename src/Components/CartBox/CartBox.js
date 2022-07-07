import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext";

import './CartBox.scss';
import Button from '../Button/Button';
import CartProduct from '../CartProduct/CartProduct';

const CartBox = () => {
    const { cartItems, cartIsOpen, setCartIsOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
        setCartIsOpen(!cartIsOpen);
    }

    return (
        <div className='cart-box-wrapper'>
            <div className="cart-product-container">
                {cartItems.map((item) => (
                    <CartProduct
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
            <Button onClick={handleCheckout}>Checkout</Button>
        </div>
    )
};

export default CartBox;