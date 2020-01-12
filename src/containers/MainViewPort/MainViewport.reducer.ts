import { IMainViewportState } from './IMainViewport.state';
import { MainViewportActions } from './MainViewport.actions';
import { MainViewportConstants } from './MainViewport.constants';

export const mainViewportReducer = (
    state: IMainViewportState = {

    },
    action: MainViewportActions): IMainViewportState => {
    switch (action.type) {
        case MainViewportConstants.INCREMENT:
            return {
                ...state,
            };
        case MainViewportConstants.DECREMENT:
            return {
                ...state,
            };
        default:
            return state;
    }
};
