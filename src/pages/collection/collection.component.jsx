import React from 'react';

// Redux
import { connect } from 'react-redux';

// Component Selectors
import { selectCollection } from '../../redux/shop/shop.selectors';

// Component Styles
import {
  CollectionContainer,
  CollectionTitle,
  CollectionItems,
} from './collection.styles';

// Import Components
import CollectionItem from '../../components/collection-item/collection-item.component';

// Component JSX
const Collection = ({ collection }) => {
  // Destruct collection values
  const { title, items } = collection;

  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>

      <CollectionItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionContainer>
  );
};

// Get State Values
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
