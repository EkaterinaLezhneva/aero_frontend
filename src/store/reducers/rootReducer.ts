import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import filteredProductsReducer from './filteredProductsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  filteredProducts: filteredProductsReducer,
});

export default rootReducer;
