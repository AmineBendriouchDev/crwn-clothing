import React from 'react';

// Redux
import { connect } from 'react-redux';

// Reselect
import { createStructuredSelector } from 'reselect';

// Component Selectors
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

// Component Styles
import { CollectionOverviewContainer } from './collections-overview.styles';

// Import Components
import CollectionPreview from '../collection-preview/collection-preview.component';

// Component JSX
const CollectionsOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewContainer>
);

// Get State Values
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
