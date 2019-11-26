import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { getAllProducts } from './../graphql/queries/queryProduct';

import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCEEDED,
  FETCH_PRODUCTS_FAILED
} from './actions';

const url = 'https://store.solid-broadheads.com/api/graphql';

export const fetchUrl = () => fetch(url, {
  method: 'post',
  headers: {
    'X-Shopify-Storefront-Access-Token':'removedForSecurity',
    'Content-Type':'application/json',
  },
  body: JSON.stringify({
    query: getAllProducts()
  })
}).then( (response) => {
  if (!response.ok) {
    throw new Error();
  }

  return response.json();
});



export function* fetchProducts() {
  try {
    let results = yield call(fetchUrl);
    let products = results.data.shop.products.edges;

    yield put({
      type: FETCH_PRODUCTS_SUCCEEDED,
      payload: products
    });
  } catch (error) {
    yield put({
      type: FETCH_PRODUCTS_FAILED,
      payload: error
    });
  }
}

export function* fetchProductsSaga() {
  yield takeEvery(FETCH_PRODUCTS_REQUESTED, fetchProducts);
}
