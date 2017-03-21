// @flow

import * as types from '../actions/selections';
import type { KeyWord } from '../types/definitions';

export default (state: ?KeyWord[], action: Object) => {
    return state || [];
};
