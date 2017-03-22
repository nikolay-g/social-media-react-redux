// @flow

import * as types from '../actions/selections';
import type { Topic } from '../types/definitions';

export default (state: ?Topic[], action: Object) => {
    return state || [];
};
