import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './style.scss';
import { App } from './App';
import { store } from './store';

ReactDOM.createRoot(document.body).render(
    <Provider store={store}>
        <App />
    </Provider>,
);