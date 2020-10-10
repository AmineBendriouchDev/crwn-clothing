import React from 'react';

// Component Router DOM
import { withRouter } from 'react-router-dom';

// Component Styles
import {
  MenuItemContainer,
  MenuItemBackground,
  MenuItemContent,
  MenuItemTitle,
  MenuItemSubtitle,
} from './menu-item.styles';

// Component JSX
const MenuItem = ({ title, imageURL, size, linkURL, history, match }) => (
  <MenuItemContainer onClick={() => history.push(`${match.url}${linkURL}`)}>
    <MenuItemBackground
      className='background-image'
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    />

    <MenuItemContent className='content'>
      <MenuItemTitle>{title}</MenuItemTitle>

      <MenuItemSubtitle>Shop now</MenuItemSubtitle>
    </MenuItemContent>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
