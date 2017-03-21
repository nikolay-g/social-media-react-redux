// @flow

import type {Item} from '../types/definitions';
import { CALL_API } from 'redux-api-middleware';

export const ADD_ITEM = 'ADD_ITEM';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAIL = 'GET_ITEMS_FAIL';

export const addItem = (item: Item) => {
  return {
    type: ADD_ITEM,
    item
  };
}

export const getServerItems = () => {
  return {
    [CALL_API]: {
      endpoint: `${process.env.REACT_APP_API || ''}/items`,
      method: 'GET',
      types: [GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL]
    }
  }
}
