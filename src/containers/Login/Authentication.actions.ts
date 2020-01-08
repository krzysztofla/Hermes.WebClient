import { AuthenticationConstants } from './Authentication.constants';

export interface ILoginSuccess {
    type: AuthenticationConstants.ON_LOGIN_SUCCESS,
    payload: any;
}

export const OnLoginSuccess = (payload: any): ILoginSuccess => ({ type: AuthenticationConstants.ON_LOGIN_SUCCESS, payload: {} });


export type AuthenticationActions = ILoginSuccess;