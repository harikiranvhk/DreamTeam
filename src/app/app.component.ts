import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { AppService } from './app.service';
import { SpinnerService } from './sharedService/spinner.service';
import { Store, State } from '@ngrx/store';
import { AppState } from './reducer';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "dreamteam";
  name = "";
  surname = "";
  num = "";
  age = "";
  total = "";
  caseNumber: number;
  employeList: any;
  showTable: boolean = false;
  showNav:boolean;
  loginMessage:boolean;

  myId: number = 10;
  loading: boolean;

  apples = "";
  bananas = "";
  count = "";
  constructor(
    private appService: AppService,
    private spinner: SpinnerService,
    private store: Store<AppState>
  ) {
    console.log("App Constructor Called");
  }
  ngOnInit() {
    this.store
      .select((state) => state.homeState.loading)
      .subscribe((res) => {
        this.loading=res;
        console.log('store Variable',res);

      }
      );
        this.store.select((state)=>state.homeState.loginStatus).subscribe(res=>{
          this.showNav=res;
        })

        this.store.select(state=>state.homeState.showLoginMessage).subscribe(res=>{
          this.loginMessage=res;

        })




    // this.spinner.cast.subscribe((res) => {
    //   let loading = res;
    //   //  console.log(loading)
    // });
  }

  //   attackers(lw:string,st:string,rw:string){

  //     console.log(`the attackers in my dream team are Striker is ${st} and Left Wing is ${lw} and the right Wing is ${rw}` );

  //   }

  // midfielder(cam:string,cdm:string,cm:string){
  // console.log(`The midfielders i like to have in my dream team are CAM is ${cam}, whereas CDM is ${cdm} and CM is ${cm}`);

  // }
  // totalValue(){
  //   this.total=this.num+this.age;
  //   console.log(this.total);
  // }
  // totalFruits(){
  // //   this.count=this.apples+this.bananas;
  // }
  getCaseStatus() {
    console.log(this.caseNumber);
    this.appService.getCaseById(this.caseNumber);
  }

  // newCaseId(){
  //   //(2) so after clicking the button we created in the html it redirects us to the this function cuz this function is assinged to the button when clicked
  //   //(3) now we generate a service and add the constructor which creates instance between service and compontent
  //   console.log('');
  //   this.appService.newCaseName()
  //   .subscribe(result=>{
  //     // so this.appservice refers to the serrvice file and the function is the one we created in service
  //     //subscribe is the syntax for now and the result will be now stored in a global variable with any datatype that's what
  //     //emplyeList is for now the required data is in employeList and using that we do interpolation just to check whether its
  //     //printing or not to make sure wedid everything right

  // console.log(result);

  // this.employeList=result;
  // console.log(this.employeList);
  // this.showTable=true;
  // console.log(this.employeList.data.length);
  // for(let i =0; i<this.employeList.data.length; i++){
  //   if (this.employeList.data[i].employee_age<=50) {
  //     console.log(this.employeList.data[i].employee_age,'Young');

  //   } else {
  //     console.log(this.employeList.data[i].employee_age,'Older');

  //   }
  //   // if (this.employeList.data[i].employee_age<=50) {
  //   //   console.log(this.employeList.data[i].employee_age,'Young');
  //   //   }
  //   // console.log(this.employeList.data[i].employee_age);
  //   // this.employeList[i];
  // }

  //   })
  // }

  loopFunction() {
    for (let i = 1; i <= 100; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  }

  twoWay() {
    this.myId = this.myId * 2;

    console.log(this.myId);
  }
}


