import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Loading from './components/Loading';
import ThemeContext from './contexts/theme';

// Dynamic imports.
const LazyStories = React.lazy(() => import('./components/Stories'));
const LazyUser = React.lazy(() => import('./components/User'));
const LazyComments = React.lazy(() => import('./components/Comments'));

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme((theme) => theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme}>
        <div className='ui container'>
          <Nav toggleTheme={toggleTheme} />
          <React.Suspense fallback={Loading}>
            <Switch>
              <div className='main-content-container' style={{maxWidth: '1000px', margin: '0 auto'}}>
                <Route 
                  exact 
                  path='/' 
                  render={() => 
                    <LazyStories type='topstories' header='Top Stories' />
                  } 
                />
                <Route 
                  path='/new'
                  render={() => 
                    <LazyStories type='newstories' header='New Stories' />
                  } 
                 />
                <Route path='/user' component={LazyUser} />
                <Route path='/post' component={LazyComments} />
              </div>
            </Switch>
          </React.Suspense>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
