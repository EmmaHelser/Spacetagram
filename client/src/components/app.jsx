import React, {useState, useEffect} from 'react';
import ImageList from './imageList.jsx';
import token from '../../../token.js';
import axios from 'axios';
import ImageOfTheDayCard from './imageOfDayCard.jsx';

function App (props) {
  const [images, setImages] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState('');
  const [imageOfDay, setImageOfDay] = useState(null);


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${token.token}`)
      .then((response) => {
        let images = response.data;

        setImageOfDay(images);
        setLikedPhotos(likedPhotos);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    const date = imageOfDay ? imageOfDay.date : new Date();
    const dateParts = typeof date === 'string' ? date.split('-') : null;
    const day = dateParts ? Number.parseInt(dateParts[2]) : null;
    const currentDate = dateParts ? `${dateParts[0]}-${dateParts[1]}-${day - 1}` : null;
    const pastDate = dateParts ? `${dateParts[0]}-${Number.parseInt(dateParts[1]) - 1}-${day - 15 > 0 ? day - 15 : 20}` : null;
    const likedPhotos = localStorage.favSpacePics ? JSON.parse(localStorage.favSpacePics) : likedPhotos;

    if (typeof date === 'string') {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${token.token}&start_date=${pastDate}&end_date=${currentDate}`)
      .then((response) => {
        let images = response.data.reverse();
        setImages(images);
        setLikedPhotos(likedPhotos);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [imageOfDay]);

  const imageLiked = (imageTitle) => {
    const likedImages = localStorage.favSpacePics ? JSON.parse(localStorage.favSpacePics) : [];

    likedImages.push(imageTitle);

    this.setState({likedPhotos: likedImages});
    localStorage.setItem('favSpacePics', JSON.stringify(likedImages));
  }

  const unlikeImage = (imageTitle) => {
    const likedImages = localStorage.favSpacePics ? JSON.parse(localStorage.favSpacePics) : [];
    const imageIndex = likedImages.indexOf(imageTitle);

    likedImages.splice(imageIndex, 1);

    this.setState({likedPhotos: likedImages});
    localStorage.setItem('favSpacePics', JSON.stringify(likedImages));
  }

    if (imageOfDay === null) {
      return (
        <div className='container'>
          <div className="lds-dual-ring"></div>
          <h1 className='appName' alt='Loading...'>Loading...</h1>
        </div>
      )
    } else {
      return (
        <div className='container'>
          <h1 className='appName' alt='Spacetagram'>Spacetagram</h1>
          <p className='credit' alt='Brought to you by NASA Images API'>Brought to you by NASA Images API</p>
          <ImageOfTheDayCard image={imageOfDay} imageLiked={imageLiked}  unlikeImage={unlikeImage} />
          { images ?
              <ImageList images={images} imageOfDay={imageOfDay} liked={likedPhotos} imageLiked={imageLiked}  unlikeImage={unlikeImage} /> :
              <div className="lds-dual-ring"></div>
          }
        </div>
      )
    }
}

export default App;