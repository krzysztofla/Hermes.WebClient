import { all, fork } from 'redux-saga/effects';
import { onUserLoginRequest } from '../containers/Authentication/Authentication.saga';
const sagas: any[] = [
  onUserLoginRequest
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
