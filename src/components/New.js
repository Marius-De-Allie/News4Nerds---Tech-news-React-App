import React, { Component } from 'react';
import StoryList from './StoryList';
import fetchStories from '../utils/api';

class New extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newStories: null
        }
    }

    componentDidMount() {
      fetchStories('newstories')
        .then(newStories => this.setState(prevState => ({
          newStories
        })))
        .catch(e => console.warn(e))
    }

    render() {
      const { newStories } = this.state;
        return (
          <React.Fragment>
            <StoryList stories={newStories} />
          </React.Fragment>
        );
    }
};

export default New;