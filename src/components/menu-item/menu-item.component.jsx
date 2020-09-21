import React from 'react';

import './menu-item.styles.scss';

function MenuItem({ title, imageURL, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
        className='background-image'
      ></div>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
