import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  /* Display Properties */
  display: flex;
  justify-content: space-between;
  /* Dimension Properties */
  height: 70px;
  width: 100%;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  /* Dimension Properties */
  height: 100%;
  width: 70px;
  padding: 25px 0;
`;

export const Options = styled.div`
  /* Display Properties */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* Dimension Properties */
  height: 100%;
  width: 50%;
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  /* Dimension Properties */
  padding: 10px 15px;
`;
