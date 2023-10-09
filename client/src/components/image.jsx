import React from 'react';

function ImageWithProps({ width, height }) {
  return (
    <div>
      <img
        src='https://source.unsplash.com/random/800x800/?img=1'
        alt='Random Image'
        width={width}
        height={height}
      />
    </div>
  );
}

export default ImageWithProps;
