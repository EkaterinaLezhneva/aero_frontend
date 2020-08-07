import { ProductsState } from './reducers/productsReducer';

export interface IRootState {
  products: ProductsState;
  filteredProducts: ProductsState;
}