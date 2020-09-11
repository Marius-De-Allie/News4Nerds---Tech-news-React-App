import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StoryItem from './StoryItem';
import ThemeContext from '../contexts/theme';
import Loading from './Loading';

const StoryList = ({ stories }) => {
    const theme = useContext(ThemeContext);

    return (
        <div className='story-list-container'>
            {stories.length < 0 ? <Loading className={`text-${theme}`} text='Fetching Stories' />:
                <ul>
                    {stories.map(story => 
                        <StoryItem key={story.id} {...story} />
                    )}
                </ul>
            }
        </div>
    );
};

// StoryList proptypes.
StoryList.propTypes = {
    stories: PropTypes.array.isRequired
};

export default StoryList;