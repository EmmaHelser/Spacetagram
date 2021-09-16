import React from 'react';

function ImageCard (props) {
  return (
    <div className='container'>
      <h2>Image: {props.image.image}</h2>
      <h3>Image Title: {props.image.title}</h3>
      <p>Description: {props.image.description}</p>
      <div>
        <h4>Date: {props.image.date}</h4>
        <h4>Like: {props.image.liked}</h4>
      </div>
    </div>
  )
}

export default ImageCard;