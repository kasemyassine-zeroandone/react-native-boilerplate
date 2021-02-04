/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';

export default function* watch() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, loginSaga)
  ]);
}
