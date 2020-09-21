import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

function MenuItem({ title, imageURL, size, linkURL, history, match }) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkURL}`)}
    >
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

export default withRouter(MenuItem);
