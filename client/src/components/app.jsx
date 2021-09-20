import React, {useState, useEffect} from 'react';
import ImageList from './imageList.jsx';
import token from '../../../token.js';
import axios from 'axios';

function App (props) {
  const [images, setImages] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState([]);

  useEffect(() => {
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    const pastDate = date.getDay() - 15 > 0 ? `${date.getFullYear()}-${date.getMonth()}-${date.getDay() - 15}` : `${date.getFullYear()}-${date.getMonth() - 1}-${20}`;
    const likedPhotos = localStorage.favSpacePics ? JSON.parse(localStorage.favSpacePics) : likedPhotos;

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${token.token}&start_date=${pastDate}&end_date=${currentDate}`)
      .then((response) => {
        let images = response.data.reverse();
        setImages(images);
        setLikedPhotos(likedPhotos);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    const date = new Date();
    const currentDate = date.getDay() - 15 > 0 ? `${date.getFullYear()}-${date.getMonth()}-${date.getDay() - 15}` : `${date.getFullYear()}-${date.getMonth() - 1}-${20}`;
  }, [images]);

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

    if (images === null) {
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
          <ImageList images={images} liked={likedPhotos} imageLiked={imageLiked}  unlikeImage={unlikeImage} />
        </div>
      )
    }
}

export default App;