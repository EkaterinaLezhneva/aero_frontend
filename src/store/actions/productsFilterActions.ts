import { Action } from 'redux';
import { createAction } from 'typesafe-actions';

import IProduct from '../../components/ProductCard/product.interface';
import {
  GET_FILTERED_PRODUCTS_IN_START,
  GET_FILTERED_PRODUCTS_IN_SUCCESS,
  GET_FILTERED_PRODUCTS_IN_FAIL,
} from './productsFilterActionsTypes';

export interface ActionWithError extends Action {
  error: IError | null | undefined;
}
export interface IError {
  message: string;
}
export interface IFilter {
  filters: string[];
}
export interface IInStartAction extends ActionWithError {
  payload: IFilter;
}
export interface IInSuccessAction extends ActionWithError {
  payload: IProduct[];
}
export interface IInFailureAction extends ActionWithError {
  payload: null,
}

export const getFilteredProductsInStartAction = createAction(
  GET_FILTERED_PRODUCTS_IN_START
)<Record<string, boolean>>();

export const getFilteredProductsInSuccessAction = createAction(
  GET_FILTERED_PRODUCTS_IN_SUCCESS
)<IProduct[]>();

export const getFilteredProductsInFailAction = createAction(
  GET_FILTERED_PRODUCTS_IN_FAIL
)<IError>();
