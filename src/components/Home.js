import React, { Component } from 'react';
import StoryList from './StoryList';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topStories: null
        }
    }

    render() {
        return (
            <React.Fragment>
                Home/Top Stories
                <StoryList />
            </React.Fragment>
        );
    }

};

export default Home;