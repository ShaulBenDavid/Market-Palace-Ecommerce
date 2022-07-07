import React, { useContext } from 'react';

import { CartContext } from '../../Context/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './CheckoutProduct.scss';

const CheckoutProduct = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  
  const {
    addItemToCart,
    deleteItemToCart,
    removeItemToCart
  } = useContext(CartContext)

  // Increase item quantity
  const handleAdd = () => {
    addItemToCart(item);
  }

  // Decrease item quantity
  const handleDecrease = () => {
    removeItemToCart(item);
  }

  // Delete item
  const handleDelete = () => {
    deleteItemToCart(item);
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