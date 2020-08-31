import React, { Component } from 'react';
import StoryList from './StoryList';
import fetchStories, { fetchStoryIds, fetchItem } from '../utils/api';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topStories: {}
        }
    }

    async componentDidMount () {
        const storyIds = await fetchStoryIds('topstories');
        storyIds.forEach( async (id) => {
            if(!this.state.topStories[id]) {
                const story = await fetchItem(id);
                this.setState(prevState => ({
                    topStories: {
                        ...prevState.topStories,
                        [story.id]: {...story}
                    }
                }))
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
        const ids = Object.keys(topStories);
        const stories = ids.map(id => topStories[id]);
        console.log('STORIES', stories)
        return (
            <React.Fragment>
                <h1>Top Stories</h1>
                <StoryList stories={stories} />
            </React.Fragment>
        );
    }

};

export default Home;