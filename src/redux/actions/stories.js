import { fetchStoryIds, fetchAllStories, fetchItem } from '../../utils/api';

const RECEIVE_INITIAL_STORIES = 'RECEIVE_INITIAL_STORIES';
const SET_LOADING = 'SET_LOADING';
const UPDATE_STORIES = 'UPDATE_STORIES';

const receiveInitialStories = (stories, storyType) => ({
  type: RECEIVE_INITIAL_STORIES,
  stories,
  storyType
});

const setLoading = (value) => ({
  type: SET_LOADING,
  value
});

// thunk action creator.
const handleReceiveInitialStories = (type) => {
  return (dispatch, getState) => {
    let stor = getState().stories;
    stor = stor[type];
    dispatch(setLoading(true))
    fetchStoryIds(type)
      .then(ids => {
        fetchAllStories(ids)
        .then(stories => {
            dispatch(setLoading(false))
            dispatch(receiveInitialStories(stories, type));
          })
      })

  }
};
// thunk action creator.
const handleUpdateStories = (type) => {
  return (dispatch, getState) => {
    let stor = getState().stories;
    stor = stor[type];
    dispatch(setLoading(true))
    fetchStoryIds(type)
      .then(ids => {
        dispatch(setLoading(false))
        fetchAllStories(ids)
        .then(stories => {
            dispatch(receiveInitialStories(stories, type));
          })
      })

  }
};

export {
  RECEIVE_INITIAL_STORIES,
  SET_LOADING,
  handleReceiveInitialStories,
  handleUpdateStories
};