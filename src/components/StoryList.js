import React from 'react';
import PropTypes from 'prop-types';
import StoryItem from './StoryItem';
import ThemeContext from '../contexts/theme';

const StoryList = ( { stories }) => (
    <ThemeContext.Consumer>
        {({ theme }) => (
            <div className='story-list-container'>
                {stories == null ? <p className={`text-${theme}`}>fetching stories...</p> :
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