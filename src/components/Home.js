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
        fetchStories('topstories')
        .then(topStories => {
          this.setState(prevState => ({
            topStories
          }));
        })
        .catch(e => console.warn(e));
    }

    render() {
        const { topStories } = this.state;
        return (
            <React.Fragment>
                Home/Top Stories
                <StoryList stories={topStories} />
            </React.Fragment>
        );
    }

};

export default Home;