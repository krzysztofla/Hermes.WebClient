import { combineReducers, Reducer } from 'redux';
import { IStoreState } from './IStore.state';
import { authenticationReducer } from '../containers/Authentication/Authentication.reducer';

const rootReducer: Reducer<IStoreState, any> = combineReducers({
    autheniticationState: authenticationReducer,
});

export default rootReducer;