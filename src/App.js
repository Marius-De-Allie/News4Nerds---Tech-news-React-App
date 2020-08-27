import React from 'react';
import { fetchTopStoryIds } from './utils/api';

class App extends React.Component {

  state = {
    Ids: null
  }

  componentDidMount() {
    fetchTopStoryIds()
      .then(Ids => this.setState({
        Ids
      }))
  }

  render() {
    return (
      <div>
        App
        {JSON.stringify(this.state.Ids)}
      </div>
    );
  }
}

export default App;
