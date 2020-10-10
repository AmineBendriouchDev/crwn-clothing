import styled from 'styled-components';

export const CartItemContainer = styled.div`
  /* Display Properties */
  display: flex;
  /* Dimension Properties */
  height: 80px;
  width: 100%;
  margin-bottom: 15px;
`;

export const CartItemImg = styled.img`
  /* Dimension Properties */
  width: 30%;
`;

export const CartItemDetails = styled.div`
  /* Display Properties */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* Dimension Properties */
  width: 70%;
  padding: 10px 20px;
`;

export const CartItemName = styled.span`
  /* Font Properties */
  font-size: 16px;
`;

export const CartItemPrice = styled.span`
  /* Font Properties */
  font-weight: 700;
`;
