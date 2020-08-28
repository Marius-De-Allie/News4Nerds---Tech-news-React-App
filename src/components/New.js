import React, { Component } from 'react';
import StoryList from './StoryList';

class New extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newStories: null
        }
    }

    render() {
        return (
          <React.Fragment>
            New Stories
            <StoryList />
          </React.Fragment>
        );
    }
};

export default New;