import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../school/school.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { LOAD_SPINNER } from '../action';
import { LoginService } from '../login/login.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  showUserAndLogout:boolean;
  userDetails:any;
  constructor(
    private router: Router,
    private schoolService: SchoolService,
    private store: Store<AppState>,
    private loginService: LoginService
  ) {
    console.log("Header Constructor Called");
  }

  ngOnInit() {
    console.log("Header Component OnInIt Called");
    this.store.select(state=>state.homeState.userDetails).subscribe(res=>{
    this.userDetails= res;
    })
    this.store.select(state=>state.homeState.loginStatus).subscribe(res=>{
      this.showUserAndLogout= res;
      })
  }

  homeRoute() {
    this.router.navigate(["/home"]);
  }
  employeeRoute() {
    this.router.navigate(["/employee"]);
  }
  customerRoute() {
    this.router.navigate(["/customer"]);
  }
  schoolRoute() {
    this.router.navigate(["/school"]);
  }

  studentRoute() {
    this.router.navigate(["/student"]);
  }
  aboutRoute() {
    console.log('1');
    this.store.dispatch({ type: LOAD_SPINNER, payload: true });
    console.log('2');
    this.schoolService.getDataById();
    this.router.navigate(["/about"]);
  }
  guestRoute() {
    this.router.navigate(["/guest"]);
  }
  staffRoute(){
    this.router.navigate(["/staff"]);
  }
  logOut(){
    this.loginService.loggedOut();
  }
}


