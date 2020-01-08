import { AuthenticationActions } from "./Authentication.actions";
import { AuthenticationConstants } from "./Authentication.constants";
import { IAuthenticationState } from "./Authentication.state";

export const authenticationReducer = (state: IAuthenticationState = {
    user: null,
    isUserLoggedIn: false
}, action: AuthenticationActions): IAuthenticationState => {
    switch (action.type) {
        case AuthenticationConstants.ON_LOGIN_SUCCESS:
            return {
                ...state
            }
        default:
            return state;
    }
}