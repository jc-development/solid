import { combineReducers } from 'redux';
import productsReducer from './../utilities/store-products/products-reducer';

const rootReducer = combineReducers({
  products: productsReducer
});

export default rootReducer;
