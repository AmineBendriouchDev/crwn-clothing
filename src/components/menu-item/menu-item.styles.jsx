import styled, { css } from 'styled-components';

const menuItemLargeStyles = css`
  height: 380px;
`;

const menuItemSmallStyles = css`
  height: 240px;
`;

const getMenuItemSize = (props) =>
  props.size ? menuItemLargeStyles : menuItemSmallStyles;

export const MenuItemContainer = styled.div`
  /* Display Properties */
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Position Properties */
  position: relative;
  /* Dimension Properties */
  min-width: 30%;
  margin: 0 7.5px 15px;
  border: 1px solid black;
  /* Content Properties */
  overflow: hidden;

  ${getMenuItemSize}

  &:hover {
    cursor: pointer;

    & .background-image {
      /* Animation Properties */
      transform: scale(1.1);
      transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      /* Content Properties */
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }
`;

export const MenuItemBackground = styled.div`
  /* Dimension Properties */
  height: 100%;
  width: 100%;
  /* Background Properties */
  background-position: center;
  background-size: cover;
  /* Animation Properties */
  transition: all 1s;
`;

export const MenuItemContent = styled.div`
  /* Display Properties */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Position Properties */
  position: absolute;
  /* Dimension Properties */
  height: 90px;
  border: 1px solid black;
  padding: 0 25px;
  /* Background Properties */
  background-color: white;
  /* Content Properties */
  opacity: 0.7;
  /* Animation Properties */
  transition: all 0.3s;
`;

export const MenuItemTitle = styled.h2`
  /* Dimension Properties */
  margin-bottom: 6px;
  /* Font Properties */
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  /* Color Properties */
  color: #4a4a4a;
`;

export const MenuItemSubtitle = styled.span`
  /* Font Properties */
  font-size: 16px;
  font-weight: lighter;
  text-transform: uppercase;
`;
