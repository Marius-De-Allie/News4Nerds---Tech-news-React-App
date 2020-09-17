import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import StoryItem from './StoryItem';
import ThemeContext from '../contexts/theme';
import { fetchStoryIds, fetchItem } from '../utils/api';

const Stories = ({ type, header }) => {
    const [stories, setStories] = useState(null);
    const [loadingStories, setLoadingStories] = useState(true);
    const theme = useContext(ThemeContext);


    useEffect(() => {
        fetchStoryIds(type)
            .then((ids) => {
                if(stories === null) {

                    // TODO replace with api function.
                    ids.forEach((storyId) => {
                        fetchItem(storyId)
                            .then((item) => {
                                setStories(stories => ({
                                    ...stories,
                                    [storyId]: item
                                }))
                            })
                    })
                } else {
                    ids.forEach((storyId) => {
                        if(!stories[storyId]) {
                            fetchItem(storyId)
                                .then((item) => {
                                    setStories(stories => ({
                                        ...stories,
                                        [storyId]: item
                                    }))
                                })
                        }
                    })
                }
                setLoadingStories(false);
            })
            .catch(e => console.warn('Unable to fetch story ids!'))

    }, [type]);

    let storiesArray;
    if(stories !== null) {
        storiesArray = Object.keys(stories).map(id => stories[id]);
        console.log(storiesArray)
    }

    return (
        <React.Fragment>
            <h1 className={`ui header text-${theme}`}>{header}</h1>
            {loadingStories 
                ? <p>Loading</p>
                : (
                    <div className='story-list-container'>
                        <ul>
                            {storiesArray && storiesArray.length > 0 ? storiesArray.map(story => 
                                <StoryItem key={story.id} {...story} />
                            )
                            : null
                            }
                        </ul>
                    </div>
                )
            }
        </React.Fragment>
    );
};


// StoryList proptypes.
Stories.propTypes = {
    type: PropTypes.string.isRequired,
    header: PropTypes.string
};

export default Stories;


// {storiesArray.map(story => 
//     <StoryItem key={story.id} {...story} />
// )}