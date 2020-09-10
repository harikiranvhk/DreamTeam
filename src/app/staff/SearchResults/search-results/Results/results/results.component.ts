import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducer';
import { StudentModel } from 'src/app/Models/StudentModel';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
mystudentList:Array<StudentModel>;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(state=>state.staffState.studentsList).subscribe(res=>{
      this.mystudentList=res;
      console.log(res);
    })
  }

}
