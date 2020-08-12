import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { 
    console.log("Customer Component Constructor Called");
  }

  ngOnInit() {
    console.log("Customer Component OnInIt Called");

  }

}
