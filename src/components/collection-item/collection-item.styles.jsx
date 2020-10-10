import styled from 'styled-components';

import Btn from '../btn/btn.component';

export const CollectionItemContainer = styled.div`
  /* Display Properties */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Position Properties */
  position: relative;
  /* Dimension Properties */
  height: 350px;
  width: 22vw;

  &:hover {
    .image {
      /* Dimension Properties */
      opacity: 0.8;
    }

    .btn {
      /* Display Properties */
      display: flex;
      /* Dimension Properties */
      opacity: 0.85;
    }
  }
`;

export const CollectionItemImage = styled.div`
  /* Dimension Properties */
  height: 95%;
  width: 100%;
  margin-bottom: 5px;
  /* Background Properties */
  background-size: cover;
  background-position: center;
`;

export const CollectionItemBtn = styled(Btn)`
  /* Display Properties */
  display: none;
  /* Position Properties */
  position: absolute;
  top: 255px;
  /* Dimension Properties */
  width: 80%;
  opacity: 0.7;
`;

export const CollectionItemFooter = styled.div`
  /* Display Properties */
  display: flex;
  justify-content: space-between;
  /* Dimension Properties */
  height: 5%;
  width: 100%;
  /* Font Properties */
  font-size: 18px;
`;

export const CollectionItemName = styled.span`
  /* Dimension Properties */
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionItemPrice = styled.span`
  /* Dimension Properties */
  width: 10%;
  /* Font Properties */
  font-weight: bold;
  text-align: right;
`;
