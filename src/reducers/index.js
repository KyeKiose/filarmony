import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import reposReducer from './reposReducer';

const rootReducer = combineReducers({
    repos: reposReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())