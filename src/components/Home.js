import React, { Component } from 'react';
import StoryList from './StoryList';
import fetchStories, { fetchStoryIds } from '../utils/api';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topStories: {}
        }
    }

    async componentDidMount () {
        const storyIds = await fetchStoryIds('topstories');
        storyIds.forEach(id => {
            if(!this.state.topStories[id]) {
                // TODO call fetchStory
            }
        })

        // fetchStories('topstories')
        // .then(topStories => {
        //   this.setState(prevState => ({
        //     topStories
        //   }));
        // })
        // .catch(e => console.warn(e));
    }

    render() {
        const { topStories } = this.state;
        return (
            <React.Fragment>
                <h1>Top Stories</h1>
                <StoryList stories={topStories} />
            </React.Fragment>
        );
    }

};

export default Home;