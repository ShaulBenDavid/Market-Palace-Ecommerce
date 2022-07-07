import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './CheckoutProduct.scss';

const CheckoutProduct = ({ item }) => {
    const { imageUrl, name, price, quantity } = item;

  return (
    <div className='checkout-item-container'>

        <img src={imageUrl} alt={name} />

        <p className='checkout-item-name'>{name}</p>

        <div className='checkout-item-quantity'>
            <FontAwesomeIcon
                icon={faMinus}
                className='checkout-minus-button'
            />
            <span>{quantity}</span>
            <FontAwesomeIcon
                icon={faPlus}
                className='checkout-plus-button'
            />
        </div>

        <span className='checkout-item-price'>{price}</span>
          <FontAwesomeIcon
            className='checkout-item-delete'
            icon={faTrashCan}
          />
    </div>
  )
}

export default CheckoutProduct;