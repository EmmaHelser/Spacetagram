import React from 'react';
import ImageCard from './imageCard.jsx';

function ImageList (props) {
  return (
    <div className='listContainer'>
      <h2>List of images</h2>
      <ul>
        {props.images.map((photo, index) => <ImageCard image={photo} key={index} liked={props.liked.includes(photo.title)} imageLiked={props.imageLiked}/> )}
      </ul>
    </div>
  )
}

export default ImageList;