import React from "react";

import Button from "../Button/Button";

import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "../../Store/Cart/Cart.selector";
import { addItemToCart } from "../../Store/Cart/Cart.action";

import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  const { imageUrl, name, price } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  const handleAddToCart = () => {
    dispatch(addItemToCart(cartItems, item));
  };

  return (
    <div className="product-card-wrapper">
      <img src={imageUrl} alt={name} />
      <span className="product-name">{name}</span>
      <span className="product-price">{price}</span>
      <Button buttonType="secondary" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
