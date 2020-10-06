import React from 'react';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import Btn from '../btn/btn.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { imageURL, name, price } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url('${imageURL}')`,
        }}
      ></div>

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Btn onClick={() => addItem(item)} inverted>
        Add to cart
      </Btn>
    </div>
  );
};

const mapDispatchTopProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchTopProps)(CollectionItem);
