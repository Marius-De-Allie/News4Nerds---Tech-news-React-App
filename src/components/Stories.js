import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import StoryItem from './StoryItem';
import Loading from './Loading';
import ThemeContext from '../contexts/theme';
import { handleReceiveInitialStories, handleUpdateStories } from '../redux/actions/stories';
import { fetchStoryIds, fetchItem, fetchAllStories } from '../utils/api';


const Stories = ({ type, header }) => {
    // const [stories, setStories] = useState(null);
    // const [loadingStories, setLoadingStories] = useState(true);
    const theme = useContext(ThemeContext);

    const dispatch = useDispatch();
    const stories = useSelector(state => state.stories[type]);
    const loading = useSelector(state => state.stories.loading)

    useEffect(() => {
        // On initial page load.
        if(stories === null) {
            dispatch(handleReceiveInitialStories(type));

            // On page reload/rerender.
        } else {
            dispatch(handleUpdateStories(type))
        }
    }, [type, dispatch]);

    let storiesArray;
    if(stories !== null) {
        storiesArray = Object.keys(stories).map(id => stories[id]);
        console.log(storiesArray);
        
        storiesArray = type === 'newstories' ? storiesArray.sort((a, b) => b.time - a.time) : storiesArray;
    }


    return (
        <React.Fragment>
            <h1 className={`ui header text-${theme}`}>{header}</h1>
            {loading
                ? <Loading text={`Fetching ${type === 'newstories' ? 'New' : 'Top'} stories`}/>
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