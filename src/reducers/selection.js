// @flow

import * as types from '../actions/selections';
import type { AppState, Selection } from '../types/definitions';

export default (state: ?Selection, action: Object) => {
    switch (action.type) {
        case types.SELECT_KEY_WORD:
            return Object.assign({}, state, {currentTopic: action.topic});
        case types.UPDATE_SELECTION:
            return Object.assign({}, state, action.selection);
        default:
            return state || {};
    }
};
