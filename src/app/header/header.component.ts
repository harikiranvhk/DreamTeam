import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../school/school.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { LOAD_SPINNER } from '../action';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private schoolService: SchoolService,
    private store: Store<AppState>
  ) {
    console.log("Header Constructor Called");
  }

  ngOnInit() {
    console.log("Header Component OnInIt Called");
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
    this.store.dispatch({ type: LOAD_SPINNER, payload: true });
    this.schoolService.getDataById();
    this.router.navigate(["/about"]);
  }
  guestRoute() {
    this.router.navigate(["/guest"]);
  }
}


