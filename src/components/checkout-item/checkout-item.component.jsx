import React from 'react';

// Redux
import { connect } from 'react-redux';

// Component Actions
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

// Component Styles
import {
  CheckoutItemContainer,
  CheckoutItemImgContainer,
  CheckoutItemName,
  CheckoutItemQuantity,
  CheckoutItemArrow,
  CheckoutItemQuantityValue,
  CheckoutItemRemoveBtn,
  CheckoutItemPrice,
} from './checkout-item.styles';

// Component JSX
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  // Destruct cartItem Values
  const { name, imageURL, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <CheckoutItemImgContainer>
        <img src={imageURL} alt={name} />
      </CheckoutItemImgContainer>

      <CheckoutItemName>{name}</CheckoutItemName>

      <CheckoutItemQuantity>
        <CheckoutItemArrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </CheckoutItemArrow>

        <CheckoutItemQuantityValue>{quantity}</CheckoutItemQuantityValue>

        <CheckoutItemArrow onClick={() => addItem(cartItem)}>
          &#10095;
        </CheckoutItemArrow>
      </CheckoutItemQuantity>

      <CheckoutItemPrice>${price}</CheckoutItemPrice>

      <CheckoutItemRemoveBtn onClick={() => clearItem(cartItem)}>
        &#10005;
      </CheckoutItemRemoveBtn>
    </CheckoutItemContainer>
  );
};

// Set State Values
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
