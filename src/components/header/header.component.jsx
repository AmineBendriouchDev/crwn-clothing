import React from 'react';

// Redux
import { connect } from 'react-redux';

// Firebase
import { auth } from '../../firebase/firebase.utils';

// Reselect
import { createStructuredSelector } from 'reselect';

// Component Selectors
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// Component Styles
import {
  HeaderContainer,
  LogoContainer,
  Options,
  OptionLink,
} from './header.styles';

// Import Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Import Elements
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Component JSX
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>

    <Options>
      <OptionLink to='/shop'>Shop</OptionLink>

      <OptionLink to='/shop'>Contact</OptionLink>

      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>Sign In</OptionLink>
      )}

      <CartIcon />
    </Options>

    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// Get State Values
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
