import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { fetchBroadheadModelSaga } from './../broadheads/broadhead-sagas';
import { fetchProductsSaga } from './../utilities/store-products/product-sagas';

import {
  fetchCreateStoreCheckoutSaga,
  fetchAddStoreCheckoutSaga,
  fetchUpdateStoreCheckoutSaga,
  fetchRemoveStoreCheckoutSaga,
  fetchProductTypesSaga
} from './../utilities/store-checkout/store-checkout-sagas';

export default function* rootSaga() {
  yield all([
    fetchProductsSaga(),
    fetchBroadheadModelSaga(),
    fetchCreateStoreCheckoutSaga(),
    fetchAddStoreCheckoutSaga(),
    fetchUpdateStoreCheckoutSaga(),
    fetchRemoveStoreCheckoutSaga(),
    fetchProductTypesSaga()
  ]);
}
