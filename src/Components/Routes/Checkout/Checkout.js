import React, { useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';

import Button from '../../Button/Button';
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';

import './Checkout.scss';

const Checkout = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div className='checkout-wrapper'>

            <div className='checkout-products-container'>
                <div className="checkout-products-wrapper">
                    {cartItems.map((item) => (
                        <CheckoutProduct item={item} key={item.id} />
                    ))}
                </div>
            </div>

            
            <div className="checkout-details">
                <div className="checkout-details-container">
                    <span className='checkout-quantity'>Quantity: 0</span>
                    <div>
                        <div className='total-container'>
                            <span className='total-checkout'>Total</span>
                            <span className='price-checkout'>168</span>
                        </div>
                        <Button>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;