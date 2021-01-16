import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate as Persist } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import './sass/main.scss';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <Persist persistor={persistor}>
            <App />
        </Persist>
    </Provider>,
    document.getElementById('root')
);
