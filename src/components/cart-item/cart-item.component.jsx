import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageURL, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageURL} alt={name} className='cart-item__img' />

    <div className='cart-item__details'>
      <span className='cart-item__name'>{name}</span>
      <span className='cart-item__price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
