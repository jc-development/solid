import { FETCH_PRODUCTS_SUCCEEDED } from './actions';

const initialState = [];

const productsReducer = (previousState = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_PRODUCTS_SUCCEEDED:
            return payload;
        default:
            return previousState;
    }
};

export default productsReducer;
