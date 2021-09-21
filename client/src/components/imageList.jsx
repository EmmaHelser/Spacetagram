import React from 'react';
import ImageCard from './imageCard.jsx';

function ImageList (props) {
  return (
    <div className='listContainer'>
      {props.images.map((photo, index) => <ImageCard image={photo} key={index} imageLiked={props.imageLiked} unlikeImage={props.unlikeImage} index={index} /> )}
    </div>
  )
}

export default ImageList;