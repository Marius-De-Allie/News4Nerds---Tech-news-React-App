import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import New from './components/New';

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <Home />
        <New />
      </div>
    );
  }
}

export default App;
