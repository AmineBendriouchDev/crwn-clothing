import React from 'react';

// Component Router DOM
import { Route } from 'react-router-dom';

// Import Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';

// Component JSX
const Shop = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
