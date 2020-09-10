import { combineReducers } from 'redux';

const charactersReducer = (characters = [], action) => {
  return characters;
};

export default combineReducers({
  characters: charactersReducer,
});
