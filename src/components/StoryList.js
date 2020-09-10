import React from 'react';
import PropTypes from 'prop-types';
import StoryItem from './StoryItem';
import ThemeContext from '../contexts/theme';
import Loading from './Loading';

const StoryList = ({ stories }) => (
    <ThemeContext.Consumer>
        {({ theme }) => (
            <div className='story-list-container'>
                {stories.length < 50 ? <Loading className={`text-${theme}`} text='Fetching Stories' />:
                    <ul>
                        {stories.map(story => 
                            <StoryItem key={story.id} {...story} />
                        )}
                    </ul>
                }
            </div>
        )}
    </ThemeContext.Consumer>

);

// StoryList proptypes.
StoryList.propTypes = {
    stories: PropTypes.array.isRequired
};

export default StoryList;