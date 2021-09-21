import React from 'react';

function ImageOfTheDayCard (props) {
  return (
    <div className='cardContainer'>
      <h2 alt='Image of the Day' className='imageOfTheDay'>Image of the Day</h2>
      <img src={props.image.url} alt={`${props.image.title}`}></img>
      <h3 className='imageTitle' alt=''>{props.image.title}</h3>
      <p className='imageDescription' alt={`${props.image.explanation}`}>{props.image.explanation}</p>
      <div className='dateAndLiked'>
        <h4 className='date' alt={`Date taken: ${props.image.date}`}>{props.image.date}</h4>
      </div>
    </div>
  )
}

export default ImageOfTheDayCard;