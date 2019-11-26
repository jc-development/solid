import { all, call, put, take, select, takeEvery, takeLatest } from 'redux-saga/effects';

import { fetchStoreApi } from './storeFetchApi';

import { createCheckout, checkoutLineItemsAdd, checkoutLineItemsUpdate, checkoutLineItemsRemove } from './../graphql/mutations/mutations';

import {
  FETCH_CREATE_STORE_CHECKOUT_REQUESTED,
  FETCH_CREATE_STORE_CHECKOUT_SUCCEEDED,
  FETCH_CREATE_STORE_CHECKOUT_FAILED,
  FETCH_ADD_STORE_CHECKOUT_REQUESTED,
  FETCH_ADD_STORE_CHECKOUT_SUCCEEDED,
  FETCH_ADD_STORE_CHECKOUT_FAILED,
  FETCH_UPDATE_STORE_CHECKOUT_REQUESTED,
  FETCH_UPDATE_STORE_CHECKOUT_SUCCEEDED,
  FETCH_UPDATE_STORE_CHECKOUT_FAILED,
  FETCH_REMOVE_STORE_CHECKOUT_REQUESTED,
  FETCH_REMOVE_STORE_CHECKOUT_SUCCEEDED,
  FETCH_REMOVE_STORE_CHECKOUT_FAILED,
  FETCH_STORE_PRODUCT_TYPES_REQUESTED,
  FETCH_STORE_PRODUCT_TYPES_SUCCESS,
  FETCH_STORE_PRODUCT_TYPES_FAILED
} from './actions';

export function* fetchCreateStoreCheckout() {
  try {
    const checkout = yield call(fetchStoreApi, createCheckout);
    const checkoutData = checkout.data.checkoutCreate.checkout
    // console.log('checkout from saga: ', checkout)
    yield put({
      type: FETCH_CREATE_STORE_CHECKOUT_SUCCEEDED,
      payload: checkoutData
    });
  } catch (error) {
    yield put({
      type: FETCH_CREATE_STORE_CHECKOUT_FAILED,
      payload: error
    });
  }
};

export function* fetchCreateStoreCheckoutSaga() {
  yield takeLatest(FETCH_CREATE_STORE_CHECKOUT_REQUESTED, fetchCreateStoreCheckout)
};

export function* fetchAddStoreCheckout({checkoutId, lineItems}) {
  const addLineItems = {checkoutId, lineItems};
  try {
    const checkout = yield call(fetchStoreApi, checkoutLineItemsAdd, addLineItems);
    const checkoutData = checkout.data.checkoutLineItemsAdd.checkout
    yield put({
      type: FETCH_ADD_STORE_CHECKOUT_SUCCEEDED,
      payload: checkoutData
    });
  } catch (error) {
    yield put({
      type: FETCH_ADD_STORE_CHECKOUT_FAILED,
      payload: error
    });
  }
};

export function* fetchAddStoreCheckoutSaga() {
  yield takeLatest(FETCH_ADD_STORE_CHECKOUT_REQUESTED, fetchAddStoreCheckout)
};

export function* fetchUpdateStoreCheckout({checkoutId, lineItems}) {
  // console.log('line Items: ', lineItems)
  const updateLineItems = {checkoutId, lineItems};
  try {
    const checkout = yield call(fetchStoreApi, checkoutLineItemsUpdate, updateLineItems);
    const checkoutData = checkout.data.checkoutLineItemsUpdate.checkout

    // console.log('checkout: ', checkout)
    yield put({
      type: FETCH_UPDATE_STORE_CHECKOUT_SUCCEEDED,
      payload: checkoutData
    });
  } catch (error) {
    yield put({
      type: FETCH_UPDATE_STORE_CHECKOUT_FAILED,
      payload: error
    });
  }
};

export function* fetchUpdateStoreCheckoutSaga() {
  yield takeLatest(FETCH_UPDATE_STORE_CHECKOUT_REQUESTED, fetchUpdateStoreCheckout)
};


export function* fetchRemoveStoreCheckout({checkoutId, lineItemIds}) {
  const removeLineItems = {checkoutId, lineItemIds};
  try {
    const checkout = yield call(fetchStoreApi, checkoutLineItemsRemove, removeLineItems);
    const checkoutData = checkout.data.checkoutLineItemsRemove.checkout
    yield put({
      type: FETCH_REMOVE_STORE_CHECKOUT_SUCCEEDED,
      payload: checkoutData
    });
  } catch (error) {
    yield put({
      type: FETCH_REMOVE_STORE_CHECKOUT_FAILED,
      payload: error
    });
  }
};

export function* fetchRemoveStoreCheckoutSaga() {
  yield takeLatest(FETCH_REMOVE_STORE_CHECKOUT_REQUESTED, fetchRemoveStoreCheckout)
};


export const getProductTypes = (state) => {
  return state.checkout.lineItems.edges.map( edge => {
    // console.log('edge.node.variant.product.productType: ', edge.node.variant.product.productType);
    return edge.node.variant.product.productType;
  });
};

export function* fetchProductTypesSaga() {
  yield take(FETCH_STORE_PRODUCT_TYPES_REQUESTED);
  let productTypes = yield select(getProductTypes);
  yield put({type: FETCH_STORE_PRODUCT_TYPES_SUCCESS, payload: productTypes});
}
