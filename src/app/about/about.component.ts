import { Component, OnInit } from "@angular/core";
import { SchoolService } from "../school/school.service";
import { SpinnerService } from "../sharedService/spinner.service";
import { Store, State } from '@ngrx/store';
import { AppState } from '../reducer';
import { LOAD_SPINNER } from '../action';


@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  idList: any;
  studentData: any;
  showData: boolean = false;

  constructor(
    private schoolService: SchoolService,
    private spinner: SpinnerService,
    private store: Store<AppState>
  ) {
    console.log("About Component Constructor Called");
  }

  ngOnInit() {
    this.store.select(state=>state.homeState.idList).subscribe(res=>{
     console.log(res); 
     this.idList=res;
    })
  }

  // getallIds() {
  //   this.spinner.loadSpinner(true);

  //   this.schoolService.getDataById().subscribe((res) => {
  //     this.idList = res;
  //     console.log(res);
  //     this.spinner.loadSpinner(false);
  //   });
  // }
  idChanged(id: any) {
    // this.spinner.loadSpinner(true);
    this.store.dispatch({ type: LOAD_SPINNER, payload: true });
    this.studentData = this.schoolService.getInfoById(id);
  }
}
