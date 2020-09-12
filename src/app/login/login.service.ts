import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseModel } from '../Models/response.model';
import { Store } from '@ngrx/store';
import { USER_DETAILS, LOGIN_STATUS } from '../action';
import { AppState } from '../reducer';
import { Router } from '@angular/router';
import { HttpBackendClientService } from '../httpbackendclient.service';
// import {Headers} from '@angular/http';

@Injectable({ providedIn: "root" })
export class LoginService {
  
  constructor(private http: HttpClient , private store:Store<AppState>, private router:Router,
     private httpBackend:HttpBackendClientService) {}

  getLoginCredentials(loginCredentials: any) {
    
    this.httpBackend.post<ResponseModel>("http://localhost:3000/api/login", loginCredentials).subscribe(res=>{
      this.store.dispatch({type:USER_DETAILS,payload:res.data.formattedUser})
      console.log(res.data.formattedUser);
      sessionStorage.setItem('token',res.data.token)
      this.store.dispatch({type:LOGIN_STATUS,payload:true});
      this.router.navigate(['./home'])
    },err=>{
      console.log(err);
    })
  }
  loggedOut(){
    this.http.get<ResponseModel>("http://localhost:3000/api/logout").subscribe(res=>{
      this.store.dispatch({type:LOGIN_STATUS,payload:false});
      console.log(res);
      sessionStorage.clear();
      this.store.dispatch({type:USER_DETAILS,payload:{userName:'',role:''}});
      this.router.navigate(['./login']);
    

    })
  }
}
