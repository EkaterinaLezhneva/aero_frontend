import { createReducer } from 'typesafe-actions';

import IProduct from '../../components/ProductCard/product.interface';
import { GET_PRODUCTS_IN_SUCCESS, GET_PRODUCTS_IN_FAIL } from '../actions/productsActionTypes';
import { ADD_IN_FAVORITE_IN_SUCCESS } from '../actions/isFavoriteActionTypes';
import { IAddInFavoriteInSuccessAction } from '../actions/isFavoriteActions';
import {
  IError,
  IInSuccessAction, IInFailureAction
} from '../actions/productsActions';

export interface ProductsState {
  error: IError | null | undefined;
  products: IProduct[] | null;
}
const defaultState = {
  error: null,
  products: []
};

const filteredProductsReducer = createReducer(defaultState)
  .handleType(GET_PRODUCTS_IN_SUCCESS,
    (state: ProductsState, action: IInSuccessAction) => ({
      products: action.payload, error: null,
    }))
  .handleType(GET_PRODUCTS_IN_FAIL,
    (state: ProductsState, action: IInFailureAction) => ({
      products: null, error: action.payload, })
  )
  .handleType(ADD_IN_FAVORITE_IN_SUCCESS,
    (state: ProductsState, action: IAddInFavoriteInSuccessAction) => ({
      ...state, products: state.products && state.products
        .map((product: IProduct) =>
          product.id === (action.payload) ? 
            { ...product, inFav: true } : product) }));

export default filteredProductsReducer;