import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createMemoryHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';

import productsReducer from '../shared/utilities/store-products/products-reducer';
import storeCheckoutReducer from './../shared/utilities/store-checkout/store-checkout-reducer';
import broadheadModelReducer from './../shared/broadheads/broadhead-model-reducer';

const sagaMiddleware = createSagaMiddleware();

const reduxMiddlewares = [
  routerMiddleware( createMemoryHistory() ),
  sagaMiddleware
];

export default (initialState) => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      broadhead: broadheadModelReducer,
      checkout: storeCheckoutReducer
    }),
    initialState,
    compose( applyMiddleware(...reduxMiddlewares) )
  );

  store.runSaga = sagaMiddleware.run;

  store.close = () => store.dispatch(END);

  return store;
}
