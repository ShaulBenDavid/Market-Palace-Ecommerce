import React, { useContext, useMemo } from 'react';
import { CartContext } from '../../../Context/CartContext';

import Button from '../../Button/Button';
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';

import './Checkout.scss';

const Checkout = () => {

    const { cartItems, cartQuantity } = useContext(CartContext);

    const subTotal = useMemo(() => {
        return cartItems.reduce((sum, item) => (
            sum + (item.quantity * item.price)
        ), 0)

    }, [cartItems])

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
                    <span className='checkout-quantity'>Quantity: {cartQuantity}</span>
                    <div>
                        <div className='total-container'>
                            <span className='total-checkout'>Total</span>
                            <span className='price-checkout'>{subTotal}</span>
                        </div>
                        <Button>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;