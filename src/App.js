import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import New from './components/New';
import User from './components/User';

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <div className='main-container' style={{maxWidth: '1000px', margin: '0 auto'}}>
            <Route exact path='/' component={Home} />
            <Route path='/new' component={New} />
            <Route path='/user' component={User} />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
