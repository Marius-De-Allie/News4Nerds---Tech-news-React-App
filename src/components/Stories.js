import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import StoryItem from './StoryItem';
import ThemeContext from '../contexts/theme';

const Stories = () => {
    const [stories, setStories] = useState(null);
    const [loadingStories, setLoadingStories] = useState(true);
    const theme = useContext(ThemeContext);


    return (
        <React.Fragment>
            <h1 className={`ui header text-${theme}`}>Top 50 Stories</h1>
            {loadingStories 
                ? <p>Loading</p>
                : (
                    <div className='story-list-container'>
                        <ul>
                            {stories.map(story => 
                                <StoryItem key={story.id} {...story} />
                            )}
                        </ul>
                    </div>
                )
            }
        </React.Fragment>
    );
};


// StoryList proptypes.
Stories.propTypes = {
    // stories: PropTypes.array.isRequired,
    // itemCount: PropTypes.number
};

export default Stories;