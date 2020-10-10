import React from 'react';

// Redux
import { connect } from 'react-redux';

// Component Actions
import { addItem } from '../../redux/cart/cart.actions';

// Component Styles
import {
  CollectionItemContainer,
  CollectionItemImage,
  CollectionItemBtn,
  CollectionItemFooter,
  CollectionItemName,
  CollectionItemPrice,
} from './collection-item.styles';

// Component JSX
const CollectionItem = ({ item, addItem }) => {
  // Destruct item Values
  const { imageURL, name, price } = item;

  return (
    <CollectionItemContainer>
      <CollectionItemImage
        className='image'
        style={{
          backgroundImage: `url('${imageURL}')`,
        }}
      />

      <CollectionItemFooter>
        <CollectionItemName>{name}</CollectionItemName>

        <CollectionItemPrice>${price}</CollectionItemPrice>
      </CollectionItemFooter>

      <CollectionItemBtn className='btn' onClick={() => addItem(item)} inverted>
        Add to cart
      </CollectionItemBtn>
    </CollectionItemContainer>
  );
};

// Set State Values
const mapDispatchTopProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchTopProps)(CollectionItem);
