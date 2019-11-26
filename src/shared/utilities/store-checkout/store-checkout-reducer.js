import {
  FETCH_CREATE_STORE_CHECKOUT_SUCCEEDED,
  FETCH_ADD_STORE_CHECKOUT_SUCCEEDED,
  FETCH_UPDATE_STORE_CHECKOUT_SUCCEEDED,
  FETCH_REMOVE_STORE_CHECKOUT_SUCCEEDED,
  FETCH_STORE_PRODUCT_TYPES_REQUESTED,
  FETCH_STORE_PRODUCT_TYPES_SUCCESS,
  FETCH_STORE_PRODUCT_TYPES_FAILED
 } from './actions';

const initialState = {
  id: "",
  webUrl: "",
  totalTax: "",
  subtotalPrice: "0.00",
  totalPrice: "0.00",
  lineItems: {
    edges: []
  }
};

const storeCheckoutReducer = (previousState = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CREATE_STORE_CHECKOUT_SUCCEEDED:
      return payload;

    case FETCH_ADD_STORE_CHECKOUT_SUCCEEDED:
      return payload;

    case FETCH_UPDATE_STORE_CHECKOUT_SUCCEEDED:
      return payload;

    case FETCH_REMOVE_STORE_CHECKOUT_SUCCEEDED:
      return payload;

    case FETCH_STORE_PRODUCT_TYPES_SUCCESS:
      return payload;

    default:
      return previousState;
  }
};

export default storeCheckoutReducer;
