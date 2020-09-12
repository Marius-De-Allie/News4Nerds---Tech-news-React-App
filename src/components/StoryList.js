import React from 'react';
import PropTypes from 'prop-types';
import StoryItem from './StoryItem';

const StoryList = ({ stories }) => {

    return (
        <div className='story-list-container'>
            <ul>
                {stories.map(story => 
                    <StoryItem key={story.id} {...story} />
                )}
            </ul>
        </div>
    );
};


// StoryList proptypes.
StoryList.propTypes = {
    stories: PropTypes.array.isRequired,
    itemCount: PropTypes.number
};

export default StoryList;