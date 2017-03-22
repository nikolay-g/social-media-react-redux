// @flow

import type {Selection} from '../types/definitions';
import {CALL_API} from 'redux-api-middleware';

export const SELECT_KEY_WORD = 'SELECT_KEY_WORD';
export const UPDATE_SELECTION = 'UPDATE_SELECTION';

export const topic = (topic: string) => {
    return {
        type: SELECT_KEY_WORD,
        topic: topic
    };
};

export const updateSelection = (selection: Selection) => {
    return {
        type: UPDATE_SELECTION,
        selection: selection
    };
}
