// @flow

import type { AppState } from '../types/definitions';

const initialState: AppState = {
    selection: {
        sources: ['fb', 'tw'],
        brands: ['aami', 'apia', 'gio', 'suncorp'],
        timeframe: '24h',
        currentTopic: null,
        scale: 'log2'
    },
    topics: [ ]
};

export default initialState;
