import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  /* Display Properties */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Dimension Properties */
  width: 55%;
  min-height: 90vh;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  /* Display Properties */
  display: flex;
  justify-content: space-between;
  /* Dimension Properties */
  width: 100%;
  border-bottom: 1px solid darkgrey;
  padding: 10px 0;
`;

export const CheckoutBlock = styled.div`
  /* Dimension Properties */
  width: 23%;
  /* Font Properties */
  text-transform: capitalize;

  &:last-child {
    /* Dimension Properties */
    width: 8%;
  }
`;

export const CheckoutTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Dimension Properties */
  margin-top: 30px;
  width: 100%;
  /* Font Properties */
  font-size: 36px;
`;
