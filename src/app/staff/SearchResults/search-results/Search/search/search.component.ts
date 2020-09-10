import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/staff/staff.service';
import { AppState } from 'src/app/reducer';
import { Store } from '@ngrx/store';
import { LOAD_SPINNER } from 'src/app/action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private staffService:StaffService, private store:Store<AppState>) { }

  ngOnInit(): void {
  }
  getAllStudents(){
    this.store.dispatch({type:LOAD_SPINNER,payload:true});
    this.staffService.getAllStudentsData();

  }

}
