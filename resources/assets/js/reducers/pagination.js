import { combineReducers } from 'redux';

import posts from './posts_pagination';
import comments from './comments_pagination';

export default combineReducers({posts, comments});