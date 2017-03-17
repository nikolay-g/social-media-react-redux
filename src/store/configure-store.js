// @flow

import rootReducer from '../reducers';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import type {StoreType} from '../types/definitions';

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)((createStore: any));

export default (initialState: StoreType) => {
    return createStoreWithMiddleware(rootReducer,
        initialState,

        // Adds support for Redux Devtools
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};
