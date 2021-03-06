import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  employeList:any;
  showTable:boolean=false;

  constructor(private appService: AppService){
    


  }
  
 
  newCaseId(){
    //(2) so after clicking the button we created in the html it redirects us to the this function cuz this function is assinged to the button when clicked
    //(3) now we generate a service and add the constructor which creates instance between service and compontent
    console.log('');
    this.appService.newCaseName()
    .subscribe(result=>{
      // so this.appservice refers to the serrvice file and the function is the one we created in service
      //subscribe is the syntax for now and the result will be now stored in a global variable with any datatype that's what
      //emplyeList is for now the required data is in employeList and using that we do interpolation just to check whether its
      //printing or not to make sure wedid everything right
  
  console.log(result);
  
  this.employeList=result;
  console.log(this.employeList);
  this.showTable=true;
  console.log(this.employeList.data.length);
  for(let i =0; i<this.employeList.data.length; i++){
    if (this.employeList.data[i].employee_age<=50) {
      console.log(this.employeList.data[i].employee_age,'Young');
      
    } else {
      console.log(this.employeList.data[i].employee_age,'Older');
      
    }
    // if (this.employeList.data[i].employee_age<=50) {
    //   console.log(this.employeList.data[i].employee_age,'Young');
    //   }
    // console.log(this.employeList.data[i].employee_age);
    // this.employeList[i];
  }
  
    })
  }

}
