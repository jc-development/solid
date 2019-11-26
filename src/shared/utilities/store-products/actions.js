export const FETCH_PRODUCTS_REQUESTED = 'FETCH_PRODUCTS_REQUESTED';
export const FETCH_PRODUCTS_SUCCEEDED = 'FETCH_PRODUCTS_SUCCEEDED';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

export const fetchProducts = () => ({
    type: FETCH_PRODUCTS_REQUESTED,
    payload: {},
});

export const receiveProducts = (payload) => {
  return {
    type: FETCH_PRODUCTS_SUCCEEDED,
    payload
  };
}
