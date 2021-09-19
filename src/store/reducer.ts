import { combineReducers } from 'redux';
import productReducer from './modules/product/reducer';
import productsReducer from './modules/products/reducer';

export default combineReducers({
  products: productsReducer,
  product: productReducer,
});
