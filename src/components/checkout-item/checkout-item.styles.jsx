import styled, { css } from 'styled-components';

const checkoutItemCelStyles = css`
  /* Dimension Properties */
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  /* Display Properties */
  display: flex;
  align-items: center;
  /* Dimension Properties */
  width: 100%;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  /* Font Properties */
  font-size: 20px;
`;

export const CheckoutItemImgContainer = styled.div`
  /* Dimension Properties */
  width: 23%;
  padding-right: 15px;

  img {
    /* Dimension Properties */
    height: 100%;
    width: 100%;
  }
`;

export const CheckoutItemName = styled.span`
  ${checkoutItemCelStyles}
`;

export const CheckoutItemQuantity = styled.span`
  /* Display Properties */
  display: flex;
  /* Dimension Properties */
  padding-left: 20px;

  ${checkoutItemCelStyles}
`;

export const CheckoutItemArrow = styled.div`
  cursor: pointer;
`;

export const CheckoutItemQuantityValue = styled.span`
  /* Dimension Properties */
  margin: 0 10px;
`;

export const CheckoutItemPrice = styled.span`
  /* Font Properties */
  font-weight: 700;

  ${checkoutItemCelStyles}
`;

export const CheckoutItemRemoveBtn = styled.div`
  cursor: pointer;
  /* Dimension Properties */
  padding-left: 12px;
`;
