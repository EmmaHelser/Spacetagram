import React from 'react';

function ImageCard (props) {
  return (
    <div className='cardContainer'>
      <img src={props.image.url} alt={`${props.image.title}`}></img>
      <h3 className='imageTitle' alt=''>{props.image.title}</h3>
      <p className='imageDescription' alt={`${props.image.explanation}`}>{props.image.explanation}</p>
      <div className='dateAndLiked'>
        <h4 className='date' alt={`Date taken: ${props.image.date}`}>{props.image.date}</h4>
        {props.liked === true ?
        <h4 className='liked' onClick={() => {props.unlikeImage(props.image.title)}} alt='Image liked'>&#10084;</h4> :
        <h4 className='liked' onClick={() => {props.imageLiked(props.image.title)}} alt='Image not liked'>&#9825;</h4>
        }
      </div>
    </div>
  )
}

export default ImageCard;