// @flow

import type {Item} from '../types/definitions';

export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (item: Item) => {
  return {
    type: ADD_ITEM,
    item
  };
}
