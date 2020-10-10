import styled from 'styled-components';

import { ReactComponent as SvgIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  cursor: pointer;
  /* Display Properties */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Position Properties */
  position: relative;
  /* Dimension Properties */
  height: 45px;
  width: 45px;
`;

export const ShoppingIcon = styled(SvgIcon)`
  /* Dimension Properties */
  height: 24px;
  width: 24px;
`;

export const ItemCount = styled.span`
  /* Position Properties */
  position: absolute;
  bottom: 12px;
  /* Font Properties */
  font-size: 10px;
  font-weight: bold;
`;
