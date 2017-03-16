// @flow

import * as types from '../actions/items';

export default (state: Object[] = [], action: Object) => {
    switch (action.type) {
        case types.ADD_ITEM:
            return [...state, Object.assign({}, action.item)];
        default:
            return state;
    }
};
