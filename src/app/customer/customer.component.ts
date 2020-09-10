import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SchoolService } from "../school/school.service";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"],
})
export class CustomerComponent implements OnInit,OnDestroy {
  constructor() {}

  ngOnInit() {}
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('customer component destroyed')
    
  }
}
