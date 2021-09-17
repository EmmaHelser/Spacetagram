import React from 'react';

function ImageCard (props) {
  return (
    <div className='cardContainer'>
      <img src={props.image.url}></img>
      <h3>{props.image.title}</h3>
      <p>{props.image.explanation}</p>
      <div>
        <h4>{props.image.date}</h4>
        <h4>{props.liked === true ? 'liked' : 'not liked'}</h4>
      </div>
    </div>
  )
}

export default ImageCard;