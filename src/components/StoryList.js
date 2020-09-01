import React from 'react';
import PropTypes from 'prop-types';
import StoryItem from './StoryItem';

const StoryList = ( { stories }) => console.log(stories)||(

    <div className='story-list-container'>
        {stories.length  === null ? <p>fetching stories...</p> :
            <ul>
                {stories.map(story => 
                    <StoryItem key={story.id} {...story} />
                )}
            </ul>
        }
    </div>
);

// StoryList proptypes.
StoryList.propTypes = {
    stories: PropTypes.array.isRequired
};

export default StoryList;