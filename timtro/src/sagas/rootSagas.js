import { call, all, fork } from 'redux-saga/effects'
import {watchSearchSagas} from '../view/search/SearchSagas'
import {watchMostSearchSagas} from '../view/search/cell/CellMostSearchSagas'
import {watchRoomNewSagas} from '../view/search/cell/CellNewRoomDetailSagas'


export default function* rootSaga() {
  yield all([
    fork(watchSearchSagas),
    fork(watchMostSearchSagas),
    fork(watchRoomNewSagas)
  ])

}