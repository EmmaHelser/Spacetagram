import React from 'react';

function ImageCard (props) {
  return (
    <div className='cardContainer'>
      <img src={props.image.url} alt={`${props.image.title}`}></img>
      <h2 className='imageTitle' alt=''>{props.image.title}</h2>
      <p className='imageDescription' alt={`${props.image.explanation}`}>{props.image.explanation}</p>
      <div className='dateAndLiked'>
        <h3 className='date' alt={`Date taken: ${props.image.date}`}>{props.image.date}</h3>
        {props.image.liked === true ?
        <h3 className='liked' onClick={() => {
          props.unlikeImage(props.image.title, props.index);
          props.image.liked = false;
        }} alt='Image liked'>&#10084;</h3> :
        <h3 className='liked' onClick={() => {
          props.imageLiked(props.image.title, props.index);
          props.image.liked = true;
        }} alt='Image not liked'>&#9825;</h3>
        }
      </div>
    </div>
  )
}

export default ImageCard;