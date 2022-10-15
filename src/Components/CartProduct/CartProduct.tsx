import React, { memo } from "react";

import { useSelector, useDispatch } from "react-redux";
import { cartItemsSelector } from "../../Store/Cart/Cart.selector";
import { deleteItemToCart } from "../../Store/Cart/Cart.action";
// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// Styls
import "./CartProduct.scss";
// Types
import { CartItem } from "../../Store/Cart/Cart.types";

type CartProductProps = {
  item: CartItem;
};

const CartProduct: React.FC<CartProductProps> = memo(({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  const handleDelete = () => {
    dispatch(deleteItemToCart(cartItems, item));
  };

  return (
    <div className="card-container">
      <div className="cart-details-wrapper">
        <img src={imageUrl} alt={name} className="img-cart-product skeleton" />
        <div className="cart-item-details">
          <span className="name-cart-item">{name}</span>
          <span className="quantity-cart-item">x{quantity}</span>
          <span className="price-cart-item">{price}</span>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faTrashCan}
        className="delete-cart-item"
        onClick={handleDelete}
      />
    </div>
  );
});

export default CartProduct;
