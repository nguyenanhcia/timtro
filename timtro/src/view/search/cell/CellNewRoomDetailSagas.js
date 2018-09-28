import {put, takeLatest} from 'redux-saga/effects'
import {ActionTypes} from "../../../constants/ActionTypes";
import {CallAPI} from "../../../networking/CallAPI";

function* roomNewSagas() {
  try {
    const result = yield CallAPI.cellNewRoomDetailAPI();

    if (result.status === 200) {
      yield put({type: ActionTypes.ROOM_NEW_SUCCESSED, products: true})
    } else {
      yield put({type: ActionTypes.ROOM_NEW_FAILED, products: false})
    }
  } catch (e) {
    yield put({type: ActionTypes.SERVER_NOT_REPLY, products: []})
  }
}


export function* watchRoomNewSagas() {
  yield takeLatest(ActionTypes.ROOM_NEW_REQUEST, roomNewSagas)
}