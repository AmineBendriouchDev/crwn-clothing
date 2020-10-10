import styled from 'styled-components';

export const CollectionContainer = styled.div`
  /* Display Properties */
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  /* Dimension Properties */
  margin: 0 auto 30px;
  /* Font Properties */
  font-size: 38px;
`;

export const CollectionItems = styled.div`
  /* Display Properties */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    /* Dimension Properties */
    margin-bottom: 30px;
  }
`;
