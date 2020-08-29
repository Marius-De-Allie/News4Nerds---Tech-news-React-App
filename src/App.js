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
          <Route exact path='/' component={Home} />
          <Route path='/new' component={New} />
          <Route path='/user' component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;
