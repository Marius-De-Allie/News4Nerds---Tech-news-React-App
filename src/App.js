import React from 'react';
import fetchStories from './utils/api';
import Home from './components/Home';

class App extends React.Component {

  state = {
    stories: null
  }

  componentDidMount() {

    fetchStories()
      .then(stories => {
        this.setState(prevState => ({
          stories
        }));
      })
      .catch(e => console.warn(e));
  }

  render() {
    return (
      <div>
        <Home />
        {JSON.stringify(this.state.stories)}
      </div>
    );
  }
}

export default App;
