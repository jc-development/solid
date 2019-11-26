import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { getStoreProductByHandleQuery } from './../utilities/graphql/queries/queryProduct';
import { fetchStoreApi } from '../utilities/store-checkout/storeFetchApi';

import {
  FETCH_BROADHEAD_REQUESTED,
  FETCH_BROADHEAD_SUCCESS,
  FETCH_BROADHEAD_FAILED
} from './actions';

const url = 'https://store.solid-broadheads.com/api/graphql';

export const fetchBroadheadModelApi = (broadhead) => {

  fetchStoreApi( getStoreProductByHandleQuery, broadhead);
};

export function* fetchBroadheadModel(action) {

  const broadheadPayload = action.payload;

  try {
    const responseFromApi = yield call(fetchStoreApi, getStoreProductByHandleQuery, broadheadPayload );
    const broadhead = responseFromApi.data.shop.productByHandle;

    if (broadhead === null) {
      yield put({
        type: FETCH_BROADHEAD_FAILED,
        broadhead
      });
    } else {
      yield put({
        type: FETCH_BROADHEAD_SUCCESS,
        broadhead
      });
    }
  } catch (error) {
    yield put({
      type: FETCH_BROADHEAD_FAILED,
      broadhead
    })
  }
}

export function* fetchBroadheadModelSaga() {
  yield takeLatest(FETCH_BROADHEAD_REQUESTED, fetchBroadheadModel)
}
