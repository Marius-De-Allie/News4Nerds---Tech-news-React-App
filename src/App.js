import React from 'react';
import fetchStories from './utils/api';

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
        App
        {JSON.stringify(this.state.stories)}
      </div>
    );
  }
}

export default App;
