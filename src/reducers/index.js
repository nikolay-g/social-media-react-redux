// @flow

import selection from './selection.js';
import topics from './topics.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    selection,
    topics
});

export default rootReducer;
