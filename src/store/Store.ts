import { applyMiddleware, createStore, Store, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { IStoreState } from './IStore.state';
import rootReducer from './RootReducer';
import saga from './Saga';
import { createLogger } from 'redux-logger';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const middlewares = [
    sagaMiddleware,
    loggerMiddleware
];


let store: Store<IStoreState>;

if (process.env.NODE_ENV === 'production') {
    store = createStore<IStoreState, Action<any>, unknown, unknown>(rootReducer, applyMiddleware(...middlewares));
} else {
    store = createStore<IStoreState, Action<any>, unknown, unknown>(
        rootReducer,
        composeEnhancers(applyMiddleware(...middlewares))
    );
}

sagaMiddleware.run(saga as any);

export default store;
