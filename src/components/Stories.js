import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import StoryItem from './StoryItem';
import ThemeContext from '../contexts/theme';
import { handleReceiveInitialStories } from '../redux/actions/stories';
import { fetchStoryIds, fetchItem, fetchAllStories } from '../utils/api';


const Stories = ({ type, header }) => {
    // const [stories, setStories] = useState(null);
    const [loadingStories, setLoadingStories] = useState(true);
    const theme = useContext(ThemeContext);

    const dispatch = useDispatch();
    const stories = useSelector(state => state.stories[type])


    useEffect(() => {
        setLoadingStories(true)
        dispatch(handleReceiveInitialStories(type));
        setLoadingStories(false);


        // fetchStoryIds(type)
        //     .then((ids) => {
        //         if(stories === null) {
        //             console.log('THE FULL UPDATE RAN')
        //             fetchAllStories(ids)
        //                 .then((stories) => {
        //                     setLoadingStories(false);
        //                     setStories(stories);
        //                 })
        //         } else {
        //             console.log('THE PARTIAL UPDATE RAN')

        //             ids.forEach((storyId) => {
        //                 if(!stories[storyId]) {
        //                     fetchItem(storyId)
        //                         .then((item) => {
        //                             setStories(stories => ({
        //                                 ...stories,
        //                                 [storyId]: item
        //                             }))
        //                         })
        //                 }
        //             })
        //         }
        //         // setLoadingStories(false);
        //     })
        //     .catch(e => console.warn('Unable to fetch story ids!'))

    }, [type]);

    let storiesArray;
    if(stories !== null) {
        storiesArray = Object.keys(stories).map(id => stories[id]);
        console.log(storiesArray);
        
        storiesArray = type === 'newstories' ? storiesArray.sort((a, b) => b.time - a.time) : storiesArray;
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