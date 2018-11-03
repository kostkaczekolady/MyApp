import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from 'reducers';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

// Creates a preconfigured store.
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState);


    return store;
}
