import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { SpinnerService } from '../sharedService/spinner.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit,OnDestroy{
  newEmpList:any;   
  employeList:any;
  showTable:boolean=false;
  ngOnInit() {
    console.log("Employee Component OnInIt Called");

  }

  constructor(private appService: AppService, private spinner:SpinnerService){
    console.log("Employee Component Constructor Called");
    


  }

  someFun() {
    // this.appService.getCaseById[Symbol].
  }
  
 
  newCaseId(){
    //(2) so after clicking the button we created in the html it redirects us to the this function cuz this function is assinged to the button when clicked
    //(3) now we generate a service and add the constructor which creates instance between service and compontent
    console.log('');
    this.spinner.loadSpinner(true);
    this.appService.newCaseName()
    .subscribe(result=>{
      // so this.appservice refers to the serrvice file and the function is the one we created in service
      //subscribe is the syntax for now and the result will be now stored in a global variable with any datatype that's what
      //emplyeList is for now the required data is in employeList and using that we do interpolation just to check whether its
      //printing or not to make sure wedid everything right
  
  console.log(result);
  this.spinner.loadSpinner(false);
  this.employeList=result;
  console.log(this.employeList);
  this.showTable=true;
  console.log(this.employeList.data.length);

  this.employeList.data.forEach(employee => {
    console.log(employee)
    if(employee.employee_age<=40){
    let status = "young"
    let emp ={...employee,ageGroup:status}
    this.newEmpList.push(emp)
    }
    else{
      let status = "Old"
      let emp ={...employee,ageGroup:status}
      this.newEmpList.push(emp)
    }
  });
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
  
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('employee component destroyed')
    
  }
}
