import React, { Component } from 'react';
import StoryList from './StoryList';
import fetchStories, { fetchStoryIds, fetchItem } from '../utils/api';

class New extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newStories: {}
        }
    }

    async componentDidMount() {
      const storyIds = await fetchStoryIds('newstories');
      storyIds.forEach( async(id) => {
          if(!this.state.newStories[id]) {
              const story = await fetchItem(id);
              this.setState(prevState => ({
                  newStories: {
                      ...prevState.newStories,
                      [story.id]: {...story}
                  }
              }))
          }
      })
      // fetchStories('newstories')
      //   .then(newStories => this.setState(prevState => ({
      //     newStories
      //   })))
      //   .catch(e => console.warn(e))
    }

    render() {
      const { newStories } = this.state;
      const ids = Object.keys(newStories);
      const stories = ids.map(id => newStories[id]).sort((a, b) => b.time - a.time)
        return (
          <React.Fragment>
            <StoryList stories={stories} />
          </React.Fragment>
        );
    }
};

export default New;