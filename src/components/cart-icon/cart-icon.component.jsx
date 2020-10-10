import React from 'react';

// Redux
import { connect } from 'react-redux';

// Reselect
import { createStructuredSelector } from 'reselect';

// Component Selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// Component Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Component Styles
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

// Component JSX
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCount>{itemCount ? itemCount : 0}</ItemCount>
  </CartIconContainer>
);

// Get State Values
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

// Set State Values
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
