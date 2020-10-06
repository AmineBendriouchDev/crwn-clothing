import React from 'react';

import Btn from '../btn/btn.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <Btn>GO TO CHECKOUT</Btn>
  </div>
);

export default CartDropdown;
