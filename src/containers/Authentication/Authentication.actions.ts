import { AuthenticationConstants } from './Authentication.constants';

export interface ILoginSuccess {
    type: AuthenticationConstants.ON_LOGIN_SUCCESS,
    user: any;
}

export interface ILoginError {
    type: AuthenticationConstants.ON_LOGIN_ERROR
}

export interface ILogout {
    type: AuthenticationConstants.ON_USER_LOGOUT
}


export const onLoginSuccess = (user: any): ILoginSuccess => ({ type: AuthenticationConstants.ON_LOGIN_SUCCESS, user: {} });
export const onLoginError = (): ILoginError => ({ type: AuthenticationConstants.ON_LOGIN_ERROR });
export const onLogout = (): ILogout => ({ type: AuthenticationConstants.ON_USER_LOGOUT });



export type AuthenticationActions = ILoginSuccess | ILoginError | ILogout;