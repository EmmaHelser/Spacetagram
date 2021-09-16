import React from 'react';
import ImageList from './imageList.jsx';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      images: [{image: 'rocket image', title: 'rocket', description: 'a rocket', date: '01/22/22', liked: false}, {image: 'rocket image', title: 'rocket', description: 'a rocket', date: '01/22/22', liked: false}, {image: 'rocket image', title: 'rocket', description: 'a rocket', date: '01/22/22', liked: false}]
    }
  }

  render () {
    return (
      <div className='container'>
        <h1>Spacetagram</h1>
        <ImageList images={this.state.images}/>
      </div>

    )
  }
}

export default App;