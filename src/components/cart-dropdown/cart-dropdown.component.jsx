import React from 'react';

// Component Router DOM
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Reselect
import { createStructuredSelector } from 'reselect';

// Component Selectors
import { selectCartItems } from '../../redux/cart/cart.selectors';

// Component Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Component Styles
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';

// Import Components
import Btn from '../btn/btn.component';
import CartItem from '../cart-item/cart-item.component';

// Component JSX
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItems>

    <Btn
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </Btn>
  </CartDropdownContainer>
);

// Get State Values
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
