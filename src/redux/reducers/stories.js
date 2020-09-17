import { RECEIVE_INITIAL_STORIES, SET_LOADING } from '../actions/stories';

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
    case SET_LOADING:
      return {
        ...state,
        loading: action.value
      }
    default:
      return state
  }

};

export default stories;