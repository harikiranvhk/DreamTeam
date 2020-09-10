import { LOAD_SPINNER } from "./action";
import { HomeState, HOME_INIITIALSTATE, homeReducer } from './store/home.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { StaffState, STAFF_INITIAL_STATE, staffReducer } from './staff/staff.reducer';


export interface AppState {
    homeState: HomeState,
    staffState: StaffState,
}
export const APP_INIITIALSTATE = {
    homeState: HOME_INIITIALSTATE,
    staffState:STAFF_INITIAL_STATE,
};
export const appReducer: ActionReducerMap<AppState> = {
    homeState: homeReducer,
    staffState: staffReducer
}