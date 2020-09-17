import { fetchStoryIds, fetchAllStories } from '../../utils/api';

const RECEIVE_INITIAL_STORIES = 'RECEIVE_INITIAL_STORIES';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

const receiveInitialStories = (stories, storyType) => ({
  type: RECEIVE_INITIAL_STORIES,
  stories,
  storyType
});

const toggleLoading = () => ({
  type: TOGGLE_LOADING
});

// thunk action creator.
const handleReceiveInitialStories = (type) => {
  return (dispatch, getState) => {
    fetchStoryIds(type)
      .then(ids => {
        fetchAllStories(ids)
          .then(stories => dispatch(receiveInitialStories(stories, type)))
          .then(() => dispatch(toggleLoading()));
      })

  }
};

export {
  RECEIVE_INITIAL_STORIES,
  TOGGLE_LOADING,
  handleReceiveInitialStories
};