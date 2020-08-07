import { createAction } from 'typesafe-actions';

import {
  ADD_IN_FAVORITE_IN_START,
  ADD_IN_FAVORITE_IN_SUCCESS,
  ADD_IN_FAVORITE_IN_FAIL
} from './isFavoriteActionTypes';
import { IError } from './productsActions';

export interface IAddInFavoriteInSuccessAction {
  type: string;
  payload: number,
}

export const addInFavoriteInStartAction = createAction(ADD_IN_FAVORITE_IN_START)<number>();
export const addInFavoriteInSuccessAction = createAction(ADD_IN_FAVORITE_IN_SUCCESS)<number>();
export const addInFavoriteInFailureAction = createAction(ADD_IN_FAVORITE_IN_FAIL)<IError>();