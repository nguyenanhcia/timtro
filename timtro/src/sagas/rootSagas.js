import { call, all, fork } from 'redux-saga/effects'
import {watchSearchSagas} from '../view/search/SearchSagas'


export default function* rootSaga() {
  yield all([
    fork(watchSearchSagas),
  ])

}