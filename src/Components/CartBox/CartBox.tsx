
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  cartIsOpenSelector,
  cartItemsSelector,
} from "../../Store/Cart/Cart.selector";
import { setCartIsOpen } from "../../Store/Cart/Cart.action";
// Components
import Button from "../Button/Button";
import CartProduct from "../CartProduct/CartProduct";
// Styles
import "./CartBox.scss";
import EmptyPlace from "../EmptyPlace/EmptyPlace";

const CartBox = () => {
  const dispatch = useDispatch();
  const cartIsOpen = useSelector(cartIsOpenSelector);
  const cartItems = useSelector(cartItemsSelector);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
    dispatch(setCartIsOpen(!cartIsOpen));
  };

  return (
    <div className="cart-box-wrapper">
      <div className="cart-product-container">
        {cartItems.length ? (
          cartItems.map((item) => <CartProduct key={item.id} item={item} />)
        ) : (
            <EmptyPlace text="Your cart is empty"/>
        )}
      </div>
      <Button buttonType="base" onClick={handleCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default CartBox;
