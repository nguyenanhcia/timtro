import { put, takeLatest } from 'redux-saga/effects'
import {ActionTypes} from "../../../constants/ActionTypes";

function* mostSearchSagas() {
  // try {
  //   const result = yield CallAPI.productsApi();
  //
  //   if (result.status === 200) {
  yield put({type: ActionTypes.MOST_SEARCH_SUCCESSED, products: true})
  //   } else {
  //     yield put({type: ActionTypes.PRODUCT_FAILED, products: result.errorMessage})
  //   }
  // } catch (e) {
  //   yield put({type: ActionTypes.SERVER_NOT_REPLY, products: []})
  // }
}


export function* watchMostSearchSagas() {
  yield takeLatest(ActionTypes.MOST_SEARCH_REQUEST, mostSearchSagas)
}