import React from 'react';

function ImageCard (props) {
  return (
    <div className='cardContainer'>
      <img src={props.image.url}></img>
      <h3 className='imageTitle'>{props.image.title}</h3>
      <p className='ImageDescription'>{props.image.explanation}</p>
      <div className='dateAndLiked'>
        <h4>{props.image.date}</h4>
        {props.liked === true ?
        <h4>&#10084;</h4> :
        <h4 onClick={() => {props.imageLiked(props.image.title)}}>&#9825;</h4>
        }
      </div>
    </div>
  )
}

export default ImageCard;