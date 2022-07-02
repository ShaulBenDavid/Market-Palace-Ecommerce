import React, { useContext } from 'react';
import { CartContext } from "../../Context/CartContext";

import './CartBox.scss';
import Button from '../Button/Button';
import CartProduct from '../CartProduct/CartProduct';

const CartBox = () => {
    const { cartItems } = useContext(CartContext);

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
            <Button>Checkout</Button>
        </div>
    )
};

export default CartBox;