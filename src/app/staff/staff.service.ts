import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../Models/response.model';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { GET_ALL_DATA,GET_ALL_STUDENTS, LOAD_SPINNER} from '../action';


@Injectable({
  providedIn: "root",
})
export class StaffService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  gotAllData() {
    let res = this.http
      .get<ResponseModel>("http://localhost:3000/api/getAllIds")
      .subscribe((res) => {
        console.log(res);
        this.store.dispatch({ type: GET_ALL_DATA, payload: res.data });
      });
  }
  getAllStudentsData() {
    this.http
      .get<ResponseModel>("http://localhost:3000/api/student")
      .subscribe((res) => {
        this.store.dispatch({ type: GET_ALL_STUDENTS, payload: res.data });
        this.store.dispatch({type:LOAD_SPINNER,payload:false});
      });
  }
}