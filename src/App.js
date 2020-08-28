import React from 'react';
import fetchStories from './utils/api';
import Nav from './components/Nav';
import Home from './components/Home';

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
