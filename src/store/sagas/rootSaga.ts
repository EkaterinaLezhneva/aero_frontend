import { all } from 'redux-saga/effects';

import { productsRequestWatcher } from './productsSagas';
import { addInFavoriteWatcher } from './isFavoriteSagas';
import { filteredProductsRequestWatcher } from './productsFilterSagas';

export default function* rootSaga() {
  yield all([
    productsRequestWatcher(),
    addInFavoriteWatcher(),
    filteredProductsRequestWatcher(),
  ]);
}
