import { put, takeLatest } from 'redux-saga/effects'
import {ActionTypes} from "../../constants/ActionTypes";

function* searchSagas() {
  // try {
  //   const result = yield CallAPI.productsApi();
  //
  //   if (result.status === 200) {
       yield put({type: ActionTypes.SIGN_IN_REQUEST, products: true})
  //   } else {
  //     yield put({type: ActionTypes.PRODUCT_FAILED, products: result.errorMessage})
  //   }
  // } catch (e) {
  //   yield put({type: ActionTypes.SERVER_NOT_REPLY, products: []})
  // }
}


export function* watchSearchSagas() {
  yield takeLatest(ActionTypes.SEARCH_REQUEST, searchSagas)
}