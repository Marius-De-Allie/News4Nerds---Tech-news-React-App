import { RECEIVE_INITIAL_STORIES } from '../actions/stories';

const initialState = {
  topstories: null,
  newstories: null
};

const stories = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_INITIAL_STORIES:
      return {
        ...state,
        [action.storyType]: action.stories
      }
    default:
      return state
  }

};

export default stories;