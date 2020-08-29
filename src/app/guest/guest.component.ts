import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SchoolService } from '../school/school.service';

@Component({
  selector: "app-guest",
  templateUrl: "./guest.component.html",
  styleUrls: ["./guest.component.scss"],
})
export class GuestComponent implements OnInit {
  guestForm:FormGroup
 
  constructor(private fb: FormBuilder, private schoolService:SchoolService) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.guestForm = this.fb.group({
      age: [null],
      year:[null],
      phoneNumber:[null]
    })
  }
  searchGuest(){
    console.log('1');
    // let age=this.guestForm.value.age;
    // let year=this.guestForm.value.year;
    // let phoneNumber=this.guestForm.value.phoneNumber;
    // console.log(age, year, phoneNumber);
    console.log(this.guestForm.value);
    let guest =  this.guestForm.value;
    this.schoolService.getGuestAge(guest)
    .subscribe(result=>{
      console.log(result);
    })
  }
    
  

}