const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkURL: 'shop/hats',
    },
    {
      title: 'jackets',
      imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkURL: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkURL: 'shop/sneakers',
    },
    {
      title: 'women',
      imageURL: 'https://i.ibb.co/GCCdy8t/women.png',
      size: 'large',
      id: 4,
      linkURL: 'shop/women',
    },
    {
      title: 'men',
      imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkURL: 'shop/men',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
