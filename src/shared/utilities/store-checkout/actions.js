export const FETCH_CREATE_STORE_CHECKOUT_REQUESTED = 'FETCH_CREATE_STORE_CHECKOUT_REQUESTED';
export const FETCH_CREATE_STORE_CHECKOUT_SUCCEEDED = 'FETCH_CREATE_STORE_CHECKOUT_SUCCEEDED';
export const FETCH_CREATE_STORE_CHECKOUT_FAILED = 'FETCH_CREATE_STORE_CHECKOUT_FAILED';

export const FETCH_ADD_STORE_CHECKOUT_REQUESTED = 'FETCH_ADD_STORE_CHECKOUT_REQUESTED';
export const FETCH_ADD_STORE_CHECKOUT_SUCCEEDED = 'FETCH_ADD_STORE_CHECKOUT_SUCCEEDED';
export const FETCH_ADD_STORE_CHECKOUT_FAILED = 'FETCH_ADD_STORE_CHECKOUT_FAILED';

export const FETCH_UPDATE_STORE_CHECKOUT_REQUESTED = 'FETCH_UPDATE_STORE_CHECKOUT_REQUESTED';
export const FETCH_UPDATE_STORE_CHECKOUT_SUCCEEDED = 'FETCH_UPDATE_STORE_CHECKOUT_SUCCEEDED';
export const FETCH_UPDATE_STORE_CHECKOUT_FAILED = 'FETCH_UPDATE_STORE_CHECKOUT_FAILED';

export const FETCH_REMOVE_STORE_CHECKOUT_REQUESTED = 'FETCH_REMOVE_STORE_CHECKOUT_REQUESTED';
export const FETCH_REMOVE_STORE_CHECKOUT_SUCCEEDED = 'FETCH_REMOVE_STORE_CHECKOUT_SUCCEEDED';
export const FETCH_REMOVE_STORE_CHECKOUT_FAILED = 'FETCH_REMOVE_STORE_CHECKOUT_FAILED';

export const FETCH_STORE_PRODUCT_TYPES_REQUESTED = 'FETCH_STORE_PRODUCT_TYPES_REQUESTED';
export const FETCH_STORE_PRODUCT_TYPES_SUCCESS = 'FETCH_STORE_PRODUCT_TYPES_SUCCESS';
export const FETCH_STORE_PRODUCT_TYPES_FAILED = 'FETCH_STORE_PRODUCT_TYPES_FAILED';

export const fetchCreateStoreCheckout = (payload) => ({
  type: FETCH_CREATE_STORE_CHECKOUT_REQUESTED,
  payload
});

export const receiveCreateStoreCheckout = (payload) => ({
  type: FETCH_CREATE_STORE_CHECKOUT_SUCCEEDED,
  payload
});


export const fetchAddStoreCheckout = (checkoutId, lineItems) => {
  return {
    type: FETCH_ADD_STORE_CHECKOUT_REQUESTED,
    checkoutId,
    lineItems
  }
};

export const receiveAddStoreCheckout = (payload) => ({
  type: FETCH_ADD_STORE_CHECKOUT_SUCCEEDED,
  payload
});


export const fetchUpdateStoreCheckout = (checkoutId, lineItems) => {
  return {
    type: FETCH_UPDATE_STORE_CHECKOUT_REQUESTED,
    checkoutId,
    lineItems
  }
};

export const receiveUpdateStoreCheckout = (payload) => ({
  type: FETCH_UPDATE_STORE_CHECKOUT_SUCCEEDED,
  payload
});


export const fetchRemoveStoreCheckout = (checkoutId, lineItemIds) => {
  return {
    type: FETCH_REMOVE_STORE_CHECKOUT_REQUESTED,
    checkoutId,
    lineItemIds
  }
};

export const receiveRemoveStoreCheckout = (payload) => {
  return {
    type: FETCH_REMOVE_STORE_CHECKOUT_SUCCEEDED,
    payload
  };
};



export const getCheckoutProductTypes = () => {
  return {
    type: FETCH_STORE_PRODUCT_TYPES_REQUESTED
  }
};

export const receiveCheckoutProductTypes = (productTypes) => {
  return {
    type: FETCH_STORE_PRODUCT_TYPES_SUCCESS,
    payload: productTypes
  }
};
