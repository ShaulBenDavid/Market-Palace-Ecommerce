import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, deleteItemToCart, removeItemToCart } from '../../Store/Cart/Cart.action';
import { cartItemsSelector } from '../../Store/Cart/Cart.selector';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
// Styles
import './CheckoutProduct.scss';
// Types
import { CartItem } from '../../Store/Cart/Cart.types';
type CheckoutProductProps = {
  item: CartItem;
}

const CheckoutProduct: React.FC<CheckoutProductProps> = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);
  
  // Increase item quantity
  const handleAdd = () => {
    dispatch(addItemToCart(cartItems, item));
  }

  // Decrease item quantity
  const handleDecrease = () => {
    dispatch(removeItemToCart(cartItems, item));
  }

  // Delete item
  const handleDelete = () => {
    dispatch(deleteItemToCart(cartItems, item));
  }
  
  return (
    <div className='checkout-item-container'>

        <img src={imageUrl} alt={name} />

        <p className='checkout-item-name'>{name}</p>

        <div className='checkout-item-quantity'>
            <FontAwesomeIcon
                icon={faMinus}
                className='checkout-minus-button'
                onClick={handleDecrease}
            />
            <span>{quantity}</span>
            <FontAwesomeIcon
                icon={faPlus}
                className='checkout-plus-button'
                onClick={handleAdd}
            />
        </div>

        <span className='checkout-item-price'>{price}</span>
          <FontAwesomeIcon
            className='checkout-item-delete'
            icon={faTrashCan}
            onClick={handleDelete}
          />
    </div>
  )
}

export default CheckoutProduct;