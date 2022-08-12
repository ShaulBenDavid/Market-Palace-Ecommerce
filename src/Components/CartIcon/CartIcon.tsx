import React from "react";

import { setCartIsOpen } from "../../Store/Cart/Cart.action";
import { useDispatch, useSelector } from "react-redux";
import {
  cartCountSelector,
  cartIsOpenSelector,
} from "../../Store/Cart/Cart.selector";
// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// Styles
import "./CartIcon.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartIsOpen = useSelector(cartIsOpenSelector);
  const cartQuantity = useSelector(cartCountSelector);

  const handleClick = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(setCartIsOpen(!cartIsOpen));
  };

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <FontAwesomeIcon
        className="cartIcon"
        icon={faCartShopping}
      />
      <span>{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;
