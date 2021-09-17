import React from 'react';
import ImageList from './imageList.jsx';
import token from '../../../token.js';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      images: [],
      likedPhotos: []
    }
  }

  componentDidMount () {

    const likedPhotos = localStorage.favSpacePcs ? JSON.parse(localStorage.faveSpacePics) : this.state.likedPhotos;

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${token.token}&count=10`)
      .then((response) => {
        console.log(response.data);
        this.setState({images: response.data, likedPhotos: likedPhotos});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render () {
    return (
      <div className='container'>
        <h1>Spacetagram</h1>
        <ImageList images={this.state.images} liked={this.state.likedPhotos} />
      </div>

    )
  }
}

export default App;