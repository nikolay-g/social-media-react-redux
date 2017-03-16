// @flow

import rootReducer from '../reducers';
import {createStore} from 'redux';
import type {StoreType} from '../types/definitions';

export default (initialState: StoreType) => {
    return createStore(rootReducer,
        initialState,

        // Adds support for Redux Devtools
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};
