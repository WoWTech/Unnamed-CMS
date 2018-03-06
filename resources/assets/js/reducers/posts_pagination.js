import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions';
import union from 'lodash/union';

const default_state = {
  isFetching: false,
  next_page_url: null,
  ids: []
};

export default (state = default_state, action) => {
  switch(action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        next_page_url: action.response.next_page_url,
        ids: union(state.ids, action.response.result)
      };
    default:
      return state;
  }
}