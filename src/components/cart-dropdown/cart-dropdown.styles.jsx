import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  z-index: 5;
  /* Display Properties */
  display: flex;
  flex-direction: column;
  /* Position Properties */
  position: absolute;
  top: 90px;
  right: 40px;
  /* Dimension Properties */
  height: 340px;
  width: 240px;
  border: 1px solid black;
  padding: 20px;
  /* Background Properties */
  background-color: white;
`;

export const CartItems = styled.div`
  /* Display Properties */
  display: flex;
  flex-direction: column;
  /* Dimension Properties */
  height: 240px;
  margin-bottom: auto;
  /* Content Properties */
  overflow: scroll;
`;

export const EmptyMessage = styled.span`
  /* Dimension Properties */
  margin: 50px auto;
  /* Font Properties */
  font-size: 18px;
`;
