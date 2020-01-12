import { MainViewportConstants } from './MainViewport.constants';

export interface IMainViewportIncrement {
    type: MainViewportConstants.INCREMENT;
}

export interface IMainViewportDecrement {
    type: MainViewportConstants.DECREMENT;
}


export const increment = (): IMainViewportIncrement => ({
    type: MainViewportConstants.INCREMENT
});

export const decrement = (): IMainViewportDecrement => ({
    type: MainViewportConstants.DECREMENT
});


export type MainViewportActions =
    IMainViewportIncrement
    | IMainViewportDecrement;