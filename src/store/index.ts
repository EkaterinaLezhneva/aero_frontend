import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import rootSaga from './sagas/rootSaga';
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, sagaMiddleware),
  // eslint-disable-next-line no-underscore-dangle,@typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
));

sagaMiddleware.run(rootSaga);

export default store;
