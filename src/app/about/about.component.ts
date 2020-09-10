import { Component, OnInit, OnDestroy } from "@angular/core";
import { SchoolService } from "../school/school.service";
import { SpinnerService } from "../sharedService/spinner.service";
import { Store, State, select } from '@ngrx/store';
import { AppState } from '../reducer';
import { LOAD_SPINNER, STUDENT_BY_ID } from '../action';
import { Subscription } from 'rxjs';


@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit, OnDestroy {
  idList:Array<string>;
  studentData: any;
  showData: boolean = false;
  private subscription: Subscription = new Subscription();
  constructor(
    private schoolService: SchoolService,
    private spinner: SpinnerService,
    private store: Store<AppState>
  ) {
    console.log("About Component Constructor Called");
  }


  ngOnInit() {
    
    const  sub1=this.store.select(state=>state.homeState.idList).subscribe(res=>{
     console.log(res); 
     console.log("5");
     this.idList=res;
    });
    this.subscription.add(sub1);
    const  sub2=this.store.select(state=>state.homeState.student).subscribe(res=>{
      this.studentData=res;
      this.showData=true;
    });
    this.subscription.add(sub2);
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
   
  this.schoolService.getInfoById(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
