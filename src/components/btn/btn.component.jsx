import React from 'react';

import './btn.styles.scss';

const Btn = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={` ${inverted ? 'btn--inverted' : ''} 
    ${isGoogleSignIn ? 'btn--google' : ''} btn`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Btn;
