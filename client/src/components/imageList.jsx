import React from 'react';
import ImageCard from './imageCard.jsx';

function ImageList (props) {
  return (
    <div className='listContainer'>
      {props.images.map((photo, index) => <ImageCard image={photo} key={index} liked={props.liked !== [] ? props.liked.includes(photo.title) : false} imageLiked={props.imageLiked} unlikeImage={props.unlikeImage} /> )}
    </div>
  )
}

export default ImageList;