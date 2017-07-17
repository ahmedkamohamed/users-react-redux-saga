import { call, put } from 'redux-saga/effects'
import api from '../../utils/api'
import {setUsers} from './reducer'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchUsers(action) {
   try {
      const users = yield call(api.getData);
    
      yield put(setUsers(users));
   } catch (e) {
      yield put({type: "USERS_FETCH_FAILED", message: e.message});
   }
}



export const fetchUsersRequested = () => {
  return {
    type: 'USERS_FETCH_REQUESTED'
  }
};
