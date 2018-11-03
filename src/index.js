import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './App';

import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

 ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));

