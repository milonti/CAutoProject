
import {createStore, applyMiddleware, compose} from 'redux';
import initialState from '../reducers/initialState.js';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore() {
  return createStore(
    rootReducer, initialState,
    composeEnhancers(
    applyMiddleware(thunk)
    )
  );
}
