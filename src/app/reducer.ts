import { LOAD_SPINNER } from "./action";
import { HomeState, HOME_INIITIALSTATE, homeReducer } from './store/home.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    homeState: HomeState,
}
export const APP_INIITIALSTATE = {
    homeState: HOME_INIITIALSTATE
};
export const appReducer: ActionReducerMap<AppState> = {
    homeState: homeReducer
}