// @flow

import type {Item} from '../types/definitions';
import {CALL_API} from 'redux-api-middleware';

export const SELECT_KEY_WORD = 'SELECT_KEY_WORD';

export const selectKeyWord = (keyWord: string) => {
    return {
        type: SELECT_KEY_WORD,
        keyWord: keyWord
    };
};
