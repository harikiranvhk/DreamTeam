import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SchoolService } from 'src/app/school/school.service';

@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrls: ['./customer-filter.component.scss']
})
export class CustomerFilterComponent implements OnInit {
  customerForm: FormGroup;
  customerResponse: any;
  showTable:boolean;
  data:any;
  

  constructor(private fb: FormBuilder, private schoolService:SchoolService) { }

  ngOnInit(): void {
    this.createForm();
    //cons
  }


  createForm() {
    console.log("2");
    this.customerForm = this.fb.group({
      age: [null],
    });

  }
  searchByAge() {
    console.log("Sending Request To Backend Flow");
     // console.dir(this.customerForm.value.age);
     console.log("1");
     this.customerForm.value.age
     console.log(this.customerForm.value.age)
     let age=this.customerForm.value.age;
     this.schoolService.getCustomerData(age);
   }
   deleteByAge(){
     console.log('hello');
    //  this.schoolService.deleteData()
   }
}



