// @flow

import type {Selection, Topic} from '../types/definitions';
import {CALL_API} from 'redux-api-middleware';

export const GET_TOPICS = 'GET_TOPICS';
export const GET_TOPICS_SUCCESS = 'GET_TOPICS_SUCCESS';
export const GET_TOPICS_FAIL = 'GET_TOPICS_FAIL';

export const getTopics = () => {
  return {
    [CALL_API]: {
      endpoint: `${process.env.REACT_APP_API || ''}/topics`,
      method: 'GET',
      types: [GET_TOPICS, GET_TOPICS_SUCCESS, GET_TOPICS_FAIL]
    }
  }
}
