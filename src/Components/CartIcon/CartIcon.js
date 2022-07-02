import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './CartIcon.scss';

const CartIcon = () => {
    const { cartIsOpen ,setCartIsOpen } = useContext(CartContext);

    const handleClick = (e) => {
        setCartIsOpen(!cartIsOpen);
    };

    return (
        <div
            className="cart-icon-container"
            onClick={handleClick}
        >
            <FontAwesomeIcon
                alt="cart button"
                className="cartIcon"
                icon={faCartShopping}
            />
            <span>0</span>
        </div>
    )
}

export default CartIcon;