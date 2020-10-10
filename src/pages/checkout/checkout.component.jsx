import React from 'react';

// Redux
import { connect } from 'react-redux';

// Reselect
import { createStructuredSelector } from 'reselect';

// Component Selectors
import {
  selectCartItems,
  selectCartItemsTotal,
} from '../../redux/cart/cart.selectors';

// Component Styles
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutBlock,
  CheckoutTotal,
} from './checkout.styles';

// Import Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

// Component JSX
const Checkout = ({ cartItems, totalPrices }) => (
  <CheckoutContainer>
    <CheckoutHeader>
      <CheckoutBlock>
        <span>Product</span>
      </CheckoutBlock>

      <CheckoutBlock>
        <span>Description</span>
      </CheckoutBlock>

      <CheckoutBlock>
        <span>Quantity</span>
      </CheckoutBlock>

      <CheckoutBlock>
        <span>Price</span>
      </CheckoutBlock>

      <CheckoutBlock>
        <span>Remove</span>
      </CheckoutBlock>
    </CheckoutHeader>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <CheckoutTotal>
      <span>TOTAL: ${totalPrices}</span>

      <StripeCheckoutButton price={totalPrices} />
    </CheckoutTotal>
  </CheckoutContainer>
);

// Get State Values
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrices: selectCartItemsTotal,
});

export default connect(mapStateToProps)(Checkout);
