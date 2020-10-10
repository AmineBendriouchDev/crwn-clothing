import React from 'react';

// Component Styles
import {
  CartItemContainer,
  CartItemImg,
  CartItemDetails,
  CartItemName,
  CartItemPrice,
} from './cart-item.styles';

// Component JSX
const CartItem = ({ item: { imageURL, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImg src={imageURL} alt={name} />

    <CartItemDetails>
      <CartItemName>{name}</CartItemName>

      <CartItemPrice>
        {quantity} x ${price}
      </CartItemPrice>
    </CartItemDetails>
  </CartItemContainer>
);

export default CartItem;
