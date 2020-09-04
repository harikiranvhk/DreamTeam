import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbsoluteSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
createRoute(){
  this.router.navigate(["./create"]);
}
}

// staff

// Absolute


// relative 
// ./create

