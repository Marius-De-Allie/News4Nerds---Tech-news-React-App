import React, { Component } from 'react';
import StoryList from './StoryList';
import { fetchStoryIds, fetchItem } from '../utils/api';
import ThemeContext from '../contexts/theme';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topStories: {}
        }
    }

    async componentDidMount () {
        const storyIds = await fetchStoryIds('topstories');
        console.log('TOP STORIES', storyIds)
        storyIds.forEach( async(id) => {
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

        // console.log('STORIES', stories)
        console.log('TOP STORIES MAN', topStories)
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <React.Fragment>
                        <h1 className={`ui header text-${theme}`}>Top 50 Stories</h1>
                        <StoryList stories={stories} />
                    </React.Fragment>
                )}
            </ThemeContext.Consumer>
        );
    }

};

export default Home;