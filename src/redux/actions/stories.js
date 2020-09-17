import { fetchStoryIds, fetchAllStories } from '../../utils/api';

const RECEIVE_INITIAL_STORIES = 'RECEIVE_INITIAL_STORIES';

const receiveInitialStories = (stories, storyType) => ({
  type: RECEIVE_INITIAL_STORIES,
  stories,
  storyType
});

// thunk action creator.
const handleReceiveInitialStories = (type) => {
  return (dispatch, getState) => {
    fetchStoryIds(type)
      .then(ids => {
        fetchAllStories(ids)
          .then(stories => dispatch(receiveInitialStories(stories, type)));
      })

  }
};

export {
  RECEIVE_INITIAL_STORIES,
  handleReceiveInitialStories
};