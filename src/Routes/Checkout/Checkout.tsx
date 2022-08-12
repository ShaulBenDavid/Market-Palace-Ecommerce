import React from "react";

import { useSelector } from "react-redux";
import {
  cartCountSelector,
  cartItemsSelector,
  cartTotalSelector,
} from "../../Store/Cart/Cart.selector";
// Components
import Button from "../../Components/Button/Button";
import CheckoutProduct from "../../Components/CheckoutProduct/CheckoutProduct";
// Styles
import "./Checkout.scss";

const Checkout = () => {
  const cartItems = useSelector(cartItemsSelector);
  const cartQuantity = useSelector(cartCountSelector);
  const subTotal = useSelector(cartTotalSelector);

  return (
    <div className="checkout-wrapper">
      <div className="checkout-products-container">
        <div className="checkout-products-wrapper">
          {cartItems.map((item) => (
            <CheckoutProduct item={item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="checkout-details">
        <div className="checkout-details-container">
          <span className="checkout-quantity">Quantity: {cartQuantity}</span>
          <div>
            <div className="total-container">
              <span className="total-checkout">Total</span>
              <span className="price-checkout">{subTotal}</span>
            </div>
            <Button buttonType="base">Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
