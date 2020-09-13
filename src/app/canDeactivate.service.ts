import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './reducer';

// import { ComponentNameComponent } from './filename.component';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
export interface CanComponentDeactivate {
canDeactivate: () => boolean;
}

@Injectable({providedIn: 'root'})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
formData:any;
dbData:any;
    constructor(private store:Store<AppState>){
        this.store.select(state=>state.homeState.dataToUpdate).subscribe(formData=>{
            this.formData=formData;
            console.log(this.formData);
        });
        this.store.select(state=>state.homeState.dbUpdateData).subscribe(dbData=>{
            this.dbData=dbData;
            console.log(this.dbData);
        });
    }
    canDeactivate(
        component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {


        console.log('can deactivate got called')
        return false;
    }
}