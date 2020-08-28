import React from 'react';
import PropTypes from 'prop-types';

const StoryList = ( { stories }) => (
    <div className='story-list-container'>
        <ul>
            StoryList
        </ul>
    </div>
);

// StoryList proptypes.
StoryList.propTypes = {
    stories: PropTypes.array.isRequired
};

export default StoryList;