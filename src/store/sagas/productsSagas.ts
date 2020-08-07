import { takeEvery, put, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import IProduct from '../../components/ProductCard/product.interface';
import { getProductsInSuccessAction } from '../actions/productsActions';
import { PRODUCTS_ROUTE } from './routes';
import axiosInstance from './axiosInstance';

interface IPayload {
  data: {
    products: IProduct[]
  };
}
function* productsRequestWorker() {
  const response: AxiosResponse<IPayload> = yield call(
    () => axiosInstance.get<IPayload>(PRODUCTS_ROUTE));
  yield put(getProductsInSuccessAction(response.data.data.products));
}
export function* productsRequestWatcher() {
  yield takeEvery('GET_PRODUCTS_IN_START', productsRequestWorker);
}