import React from 'react';

// Redux
import { connect } from 'react-redux';

// Reselect
import { createStructuredSelector } from 'reselect';

// Component Selectors
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// Component Styles
import { DirectoryContainer } from './directory.styles';

// Import Components
import MenuItem from '../menu-item/menu-item.component';

// Component JSX
const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryContainer>
);

// Get State Values
const mapStateToProps = () =>
  createStructuredSelector({
    sections: selectDirectorySections,
  });

export default connect(mapStateToProps)(Directory);
