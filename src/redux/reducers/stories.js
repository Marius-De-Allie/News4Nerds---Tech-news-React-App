import { RECEIVE_INITIAL_STORIES, TOGGLE_LOADING } from '../actions/stories';

const initialState = {
  topstories: null,
  newstories: null,
  loading: true
};

const stories = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_INITIAL_STORIES:
      return {
        ...state,
        [action.storyType]: action.stories,
      }
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading
      }
    default:
      return state
  }

};

export default stories;