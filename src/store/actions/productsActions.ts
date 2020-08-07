import { Action } from 'redux';
import { createAction } from 'typesafe-actions';

import IProduct from '../../components/ProductCard/product.interface';
import {
  GET_PRODUCTS_IN_START,
  GET_PRODUCTS_IN_SUCCESS,
  GET_PRODUCTS_IN_FAIL,
} from './productsActionTypes';

export interface ActionWithError extends Action {
  error: IError | null | undefined;
}
export interface IError {
  message: string;
}
export interface IInStartAction extends ActionWithError {
  payload: null;
}
export interface IInSuccessAction extends ActionWithError {
  payload: IProduct[];
}
export interface IInFailureAction extends ActionWithError {
  payload: null,
}

export const getProductsInStartAction = createAction(GET_PRODUCTS_IN_START)<void>();
export const getProductsInSuccessAction = createAction(GET_PRODUCTS_IN_SUCCESS)<IProduct[]>();
export const getProductsInFailAction = createAction(GET_PRODUCTS_IN_FAIL)<IError>();