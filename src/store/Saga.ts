import { all, fork } from 'redux-saga/effects';

const sagas: any[] = [
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
