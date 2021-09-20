import React from 'react';
import ImageList from './imageList.jsx';
import token from '../../../token.js';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      images: null,
      likedPhotos: []
    }

    this.imageLiked = this.imageLiked.bind(this);
    this.unlikeImage = this.unlikeImage.bind(this);
  }

  componentDidMount () {
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    const pastDate = `${date.getFullYear()}-${date.getMonth() - 1}-${date.getDay()}`;
    console.log(currentDate, pastDate);
    const likedPhotos = localStorage.favSpacePics ? JSON.parse(localStorage.favSpacePics) : this.state.likedPhotos;

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${token.token}&start_date=${pastDate}&end_date=${currentDate}`)
      .then((response) => {
        let images = response.data.reverse();
        this.setState({images: images, likedPhotos: likedPhotos});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  imageLiked (imageTitle) {
    const likedImages = localStorage.favSpacePics ? JSON.parse(localStorage.favSpacePics) : [];

    likedImages.push(imageTitle);

    this.setState({likedPhotos: likedImages});
    localStorage.setItem('favSpacePics', JSON.stringify(likedImages));
  }

  unlikeImage (imageTitle) {
    const likedImages = localStorage.favSpacePics ? JSON.parse(localStorage.favSpacePics) : [];
    const imageIndex = likedImages.indexOf(imageTitle);

    likedImages.splice(imageIndex, 1);

    this.setState({likedPhotos: likedImages});
    localStorage.setItem('favSpacePics', JSON.stringify(likedImages));
  }

  render () {
    if (this.state.images === null) {
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
          <ImageList images={this.state.images} liked={this.state.likedPhotos} imageLiked={this.imageLiked}  unlikeImage={this.unlikeImage} />
        </div>
      )
    }
  }
}

export default App;