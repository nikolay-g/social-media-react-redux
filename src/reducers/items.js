// @flow

import * as types from '../actions/items';
import type { Item } from '../types/definitions'

export default (state: Item[] = [], action: Object) => {
    switch (action.type) {
        case types.ADD_ITEM:
            return [...state, Object.assign({}, action.item)];
        case types.GET_ITEMS_SUCCESS:
            return [...state, ...action.payload];
        case types.GET_ITEMS_FAIL:
            return state;
        default:
            return state;
    }
};
