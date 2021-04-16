import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from "@angular/router";
import { Store, select } from "@ngrx/store";
import { AppState } from "./reducer";

@Injectable({ providedIn: "root" })
export class RoleBaseGuard implements CanActivate {
  userDetails: any;
  constructor(private store: Store<AppState>) {
    this.store
      .select((state) => state.homeState.userDetails)
      .subscribe((res) => {
        this.userDetails = res;
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userDetails.role == "admin") {
      return true;
    } else {
      return false;
    }
  }
}
