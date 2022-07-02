import React from 'react';
import './ProductCard.scss';
import Button from '../Button/Button';


const ProductCard = ({ item }) => {
    const { imageUrl, name, price } = item;
    
  return (
      <div className='product-card-wrapper'>
        <img src={imageUrl} alt={name} />
          <span className='product-name'>{name}</span>
          <span className='product-price'>{price}</span>
          <Button buttonType="secondary">Add to cart</Button>
      </div>
  )
}

export default ProductCard; 