import {put} from 'redux-saga/effects';

import {Alert} from 'react-native';
// import loginUser from 'app/api/methods/loginUser';
import * as loginActions from '../actions';

import {takeEvery} from 'redux-saga/effects';
import * as types from '../actions/constants';

export const loginSagas = [takeEvery(types.LOGIN_REQUEST, loginAsync)];

// Our worker Saga that logins the user
function* loginAsync() {
  yield put(loginActions.enableLoader());

  //how to call api
  //const response = yield call(loginUser, action.username, action.password);
  //mock response
  const response = {success: true, data: {id: 1}};

  if (response.success) {
    yield put(loginActions.onLoginResponse(response.data));
    yield put(loginActions.disableLoader({}));

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader({}));
  }
}
