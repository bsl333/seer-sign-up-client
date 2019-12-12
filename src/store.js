import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './redux/rootReducer';

const middleware = [thunk, logger];

export default createStore(reducers, applyMiddleware(...middleware));
