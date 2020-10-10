import React from 'react';

// Component Styles
import { BtnContainer } from './btn.styles';

// Component JSX
const Btn = ({ children, ...props }) => (
  <BtnContainer {...props}>{children}</BtnContainer>
);

export default Btn;
