import React from 'react';
import ImageList from './imageList.jsx';

class App extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className='container'>
        <h1>Spacetagram</h1>
        <ImageList />
      </div>

    )
  }
}

export default App;