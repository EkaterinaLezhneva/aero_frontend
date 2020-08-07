import { takeEvery, put, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import {
  ADD_IN_FAVORITE_IN_START,
} from '../actions/isFavoriteActionTypes';
import {
  addInFavoriteInSuccessAction,
  addInFavoriteInFailureAction,
  IAddInFavoriteInSuccessAction,
} from '../actions/isFavoriteActions';
import { ADD_IN_FAVORITE_ROUTE } from './routes';
import axiosInstance from './axiosInstance';

interface IPayload {
  success: boolean;
  data: {
    message: string;
  }
}
function* addInFavoriteWorker(action: IAddInFavoriteInSuccessAction) {
  try {
    const response: AxiosResponse<IPayload> = yield call(
      () => axiosInstance.get<IPayload>(ADD_IN_FAVORITE_ROUTE));
    if (response.data.success) {
      yield put(addInFavoriteInSuccessAction(action.payload));
    } else yield put(addInFavoriteInFailureAction(response.data.data));
  } catch (error) {
    yield put(addInFavoriteInFailureAction(error.response.data.message));
  }
}
export function* addInFavoriteWatcher() {
  yield takeEvery(ADD_IN_FAVORITE_IN_START, addInFavoriteWorker);
}