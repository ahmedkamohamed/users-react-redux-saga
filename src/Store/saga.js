import {takeEvery } from 'redux-saga/effects'
import {fetchUsers} from '../containers/RootContainer/saga'
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* rootSaga() {
  yield takeEvery("USERS_FETCH_REQUESTED", fetchUsers);
}

export default rootSaga;
