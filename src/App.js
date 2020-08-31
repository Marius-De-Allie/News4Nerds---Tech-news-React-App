import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import New from './components/New';
import User from './components/User';
import Comments from './components/Comments';
import ThemeContext from './contexts/theme';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(prevState => ({
          theme: prevState.theme === 'light' ? 'dark' : 'light'
        }));
      }
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <div className={this.state.theme}>
          <div className='container'>
            <Nav />
            <Switch>
              <div className='main-content-container' style={{maxWidth: '1000px', margin: '0 auto'}}>
                <Route exact path='/' component={Home} />
                <Route path='/new' component={New} />
                <Route path='/user' component={User} />
                <Route path='/post' component={Comments} />
              </div>
            </Switch>
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
