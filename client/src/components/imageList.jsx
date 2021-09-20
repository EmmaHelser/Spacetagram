import React from 'react';
import ImageCard from './imageCard.jsx';

function ImageList (props) {
  return (
    <div className='listContainer'>
      <ul>
        {props.images.map((photo, index) => <ImageCard image={photo} key={index} liked={props.liked.includes(photo.title)} imageLiked={props.imageLiked} unlikeImage={props.unlikeImage} /> )}
      </ul>
    </div>
  )
}

export default ImageList;