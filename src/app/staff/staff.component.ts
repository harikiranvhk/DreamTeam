import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { Store, State, select } from '@ngrx/store';
import { AppState } from '../reducer';
import { StaffService } from './staff.service';


@Component({
  selector: "app-staff",
  templateUrl: "./staff.component.html",
  styleUrls: ["./staff.component.scss"],
})
export class StaffComponent implements OnInit {
  allData: Array<string>;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private staffService: StaffService
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.staffState.studentData)
      .subscribe((res) => {
        (this.allData = res), console.log(res);
      });
  }
  createRoute() {
    this.router.navigate(["./create"]);
  }
  getAllData() {
    this.staffService.gotAllData();
  }
}



