import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import playingReducer from '../reducers/playingReducer';

const composeEnhancers = window.__REDUX_DEVLTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  const store = createStore(
    combineReducers({
      playing: playingReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}

export default configureStore;
