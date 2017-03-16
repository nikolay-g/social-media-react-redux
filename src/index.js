import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import theme from './toolbox/theme.js'
import App from './containers/App';
import './toolbox/theme.css';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import type {Store} from 'redux';
import type {StoreType} from '../types/definitions';

const store: Store<StoreType, A> = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
