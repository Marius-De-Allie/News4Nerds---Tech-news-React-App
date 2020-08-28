import React, { Component } from 'react';
import StoryList from './StoryList';
import fetchStories from '../utils/api';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topStories: null
        }
    }

    componentDidMount() {
        fetchStories()
        .then(topStories => {
          this.setState(prevState => ({
            topStories
          }));
        })
        .catch(e => console.warn(e));
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