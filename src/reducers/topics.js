// @flow

import * as types from '../actions/topics';
import type { Topic } from '../types/definitions';

export default (state: Topic[] = [], action: Object) => {
    switch (action.type) {
        case types.GET_TOPICS_SUCCESS:
            return [ ...action.payload];
        case types.GET_TOPICS_FAIL:
            return state;
        default:
            return state || [];
    }
};
