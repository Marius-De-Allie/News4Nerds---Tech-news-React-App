import { combineReducers } from 'redux';
import topStories from './topStories';
import newStories from './newStories';

export default combineReducers({
  topStories,
  newStories
});