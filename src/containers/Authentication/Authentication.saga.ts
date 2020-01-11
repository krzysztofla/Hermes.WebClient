import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthenticationConstants } from './Authentication.constants';
import { onLoginSuccess, onLoginError } from './Authentication.actions';

interface FakeUser {
    username: string;
}

async function fakeUserLogin(username: string, password: string): Promise<FakeUser> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ username: 'kris' }), 1000);
    });
}

export function* onUserLoginRequest() {
    yield takeLatest(AuthenticationConstants.ON_USER_LOGIN, login);
}

export function* login() {
    try {
        const user: FakeUser = yield call(fakeUserLogin, 'test', 'test');
        yield put(onLoginSuccess(user));
    }
    catch (ex) {
        yield put(onLoginError());
    }
}