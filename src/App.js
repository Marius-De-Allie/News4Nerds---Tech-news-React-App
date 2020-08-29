import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import New from './components/New';
import User from './components/User';

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        {/*<Home />*/}
        {/*<New />*/}
        <User />
      </div>
    );
  }
}

export default App;
