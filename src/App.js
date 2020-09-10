import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Loading from './components/Loading';
import ThemeContext from './contexts/theme';

// Dynamic imports.
const LazyHome = React.lazy(() => import('./components/Home'));
const LazyNew = React.lazy(() => import('./components/New'));
const LazyUser = React.lazy(() => import('./components/User'));
const LazyComments = React.lazy(() => import('./components/Comments'));

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
          <div className='ui container'>
            <Nav />
            <React.Suspense fallback={Loading}>
              <Switch>
                <div className='main-content-container' style={{maxWidth: '1000px', margin: '0 auto'}}>
                  <Route exact path='/' component={LazyHome} />
                  <Route path='/new' component={LazyNew} />
                  <Route path='/user' component={LazyUser} />
                  <Route path='/post' component={LazyComments} />
                </div>
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
};

export default App;
