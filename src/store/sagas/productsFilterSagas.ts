import { takeEvery, put, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { getFilteredProductsInSuccessAction, getFilteredProductsInFailAction, IInStartAction } from '../actions/productsFilterActions';
import { GET_FILTERED_PRODUCTS_IN_START } from '../actions/productsFilterActionsTypes';
import { FILTER_ROUTE } from './routes';
import axiosInstance from './axiosInstance';

function* filteredProductsRequestWorker(action: IInStartAction) {
  try {
    const response: AxiosResponse = yield call(
      () => axiosInstance.get(FILTER_ROUTE));
    if (response.data.success) {
      yield put(
        getFilteredProductsInSuccessAction(response.data.data.products));
    } else yield put(getFilteredProductsInFailAction(response.data.data));
  } catch (error) {
    yield put(getFilteredProductsInFailAction(error.response.data.message));
  }
}
export function* filteredProductsRequestWatcher() {
  yield takeEvery(GET_FILTERED_PRODUCTS_IN_START,
    filteredProductsRequestWorker);
}