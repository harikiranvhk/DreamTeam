import { Component } from '@angular/core';
import { $ } from 'protractor';
import { AppService } from './app.service';
<<<<<<< Updated upstream
=======
import { SpinnerService } from './sharedService/spinner.service';
import { Store, State } from '@ngrx/store';
import { AppState } from './reducer';
import { HammerGestureConfig } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
<<<<<<< Updated upstream
export class AppComponent {
  title = 'dreamteam';
  name= '' ; 
  surname='';
  num='';
  age='';
  total='';
  caseNumber:number;
  employeList:any;
  showTable:boolean=false;

  apples='';
  bananas='';
  count='';
  constructor(private appService: AppService){


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
    getCaseStatus(){
   console.log(this.caseNumber);
   this.appService.getCaseById(this.caseNumber);
}
=======
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
    let student = {id:1,name:'hari'};
    console.log(student);
    let studentObs$: Observable<any> = of(student);
    console.log(studentObs$);
    console.log("App Constructor Called");
  }
  ngOnInit() {

    let students = [
      {id: 1, name:"A", age:21},
      {id: 2, name:"B", age:19},
      {id: 3, name:"C", age:18},
      {id: 4, name:"D", age:23},
      {id: 5, name:"E", age:30},
      {id: 6, name:"F", age:12},
    ];
    let employee = {eid: 1, empName: 'John', email: "john@gmail.com"};
    let newEmployee = {...employee, email: "john1@gmail.com"};
    console.log(newEmployee);
// let newArray = [...students, {id: 7, name:"G", age:42}];
     let updatedStudet = [];
    // for(let i =0; i<students.length; i++) {
    //   if(students[i].age <20) {
    //     let status = "Minor";
    //     let stu = {...students[i], status};
    //     updatedStudet.push(stu);
    //   }
    //   else {
    //     let status = "Major";
    //     let stu = {...students[i], status};
    //     updatedStudet.push(stu);
    //   }
    // }
    // console.log(updatedStudet);

    updatedStudet = students.map(student => {
      if(student.age < 20) {
        let status = "Minor";
        let stu = {...student, status};
        return stu;
      }
      else {
        let status = "Major";
        let stu = {...student, status};
        return stu;
      }
    })
    // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    // const result = words.filter(word => {
    //   return word.length > 6;
    // });
    let minorStudents = students.filter((student) => {
      if (student.age < 20) {
        return student;
      }
    });

   

    console.log(minorStudents);

console.log(updatedStudet);
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
>>>>>>> Stashed changes


<<<<<<< Updated upstream
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

loopFunction(){
  for(let i=1;i<=100;i++){
    if(i%2==0){
      console.log(i);
=======
  // }
  // totalValue(){
  //   this.total=this.num+this.age;
  //   console.log(this.total);
  // }
  // totalFruits(){
  // //   this.count=this.apples+this.bananas;
  // }
  // getCaseStatus(params) {
  //   console.log(this.caseNumber);
  //   this.appService.getCaseById(this.caseNumber);
  // }

  someFunctions(a: number, b: string) {

  }

  someFunction1() {
    
  }
  getCaseStatus = () => {
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
>>>>>>> Stashed changes
    }
    
  }

  
}


}


