// @flow

import selection from './selection.js';
import keyWords from './keyWords.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    selection,
    keyWords
});

export default rootReducer;
