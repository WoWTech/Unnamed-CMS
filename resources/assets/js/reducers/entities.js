import { combineReducers } from 'redux';

const entities = (state = {}, action) => {
  if(action.response && action.response.entities) {
    return Object.assign({}, state, action.response.entities);
  }

  return state;
}

export default combineReducers({entities});