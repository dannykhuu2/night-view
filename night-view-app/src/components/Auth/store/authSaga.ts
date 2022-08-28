import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getUser } from '../../../services/userService';
import * as actions from './authSlice';

function* setUserSaga(): any {
    try {
        const res = yield call(getUser);
        const { createdAt, updatedAt, firstName, lastName, ...data } = res;
        yield put(actions.setUserSuccessAction(data));
    } catch (error) {
        yield put(actions.setUserFailAction(error));
    }
}

export function* authSaga() {
    yield all([takeLatest(actions.setUserAction.type, setUserSaga)]);
}