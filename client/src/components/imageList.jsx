import React from 'react';
import ImageCard from './imageCard.jsx';

function ImageList (props) {
  return (
    <div className='container'>
      <h2>List of images</h2>
      <ul>
        {props.images.map((photo) => <ImageCard image={photo} /> )}
      </ul>
    </div>
  )
}

export default ImageList;