import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './CartIcon.scss';

const CartIcon = () => {

    return (
        <div className="cart-icon-container">
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