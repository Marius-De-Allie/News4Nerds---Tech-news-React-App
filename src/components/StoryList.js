import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StoryItem from './StoryItem';
import ThemeContext from '../contexts/theme';
import Loading from './Loading';

const StoryList = ({ stories, itemCount }) => {
    const theme = useContext(ThemeContext);

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

StoryList.defaultProps = {
    itemCount: 50
};

export default StoryList;