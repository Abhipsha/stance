import {all} from 'redux-saga/effects';
import {loginSagas} from './LoginSaga';

// export default [loginSaga];

export default function* rootSaga() {
  yield all([...loginSagas]);
}
