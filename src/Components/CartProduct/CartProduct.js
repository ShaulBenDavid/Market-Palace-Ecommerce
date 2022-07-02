import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './CartProduct.scss';


const CartProduct = ({ item }) => {
    const { imageUrl, name, price, quantity } = item;
    const { deleteItemToCart } = useContext(CartContext);

    const handleDelete = () => {
        deleteItemToCart(item);
    };

  return (
      <div className='card-container'>
          <div className='cart-details-wrapper'>
            <img
                src={imageUrl}
                alt={name}
                className="img-cart-product"
            />
            
            <div className='cart-item-details'>
                <span className='name-cart-item'>{name}</span>
                <span className='quantity-cart-item'>x{quantity}</span>
                <span className='price-cart-item'>{price}</span>
            </div>
          </div>
          
          <FontAwesomeIcon
              icon={faTrashCan}
              className='delete-cart-item'
              onClick={handleDelete}
          />
      </div>
  )
}

export default CartProduct;