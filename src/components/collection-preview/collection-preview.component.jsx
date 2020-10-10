import React from 'react';

// Component Style
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  CollectionPreviewContent,
} from './collection-preview.styles';

// Import Components
import CollectionItem from '../collection-item/collection-item.component';

// Component JSX
const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>

      <CollectionPreviewContent>
        {items
          .filter((item, id) => id < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </CollectionPreviewContent>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
