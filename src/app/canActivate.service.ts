import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from "@angular/router";
import { AppState } from "./reducer";
import { Store } from "@ngrx/store";
import { LOGIN_MESSAGE } from "./action";

@Injectable({ providedIn: "root" })
export class AuthGaurd implements CanActivate {
  loginStatus: boolean;

  constructor(private store: Store<AppState>) {
    this.store
      .select((state) => state.homeState.loginStatus)
      .subscribe((res) => {
        this.loginStatus = res;
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("can activate executed");
    if (this.loginStatus) {
      this.store.dispatch({ type: LOGIN_MESSAGE, payload: false });
      return true;
    } else {
      this.store.dispatch({ type: LOGIN_MESSAGE, payload: true });
      return false;
    }
  }
}
