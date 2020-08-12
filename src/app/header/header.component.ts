import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) {
    console.log("Header Constructor Called");
   }

  ngOnInit(){
    console.log("Header Component OnInIt Called");
  }

  homeRoute(){
    this.router.navigate(['/home']);
  }
  employeeRoute(){
   
    this.router.navigate(['/employee']);
  
  }
  customerRoute(){
    this.router.navigate(['/customer']);
    
  }
  schoolRoute(){
    this.router.navigate(['/school']);
  }

  studentRoute(){
    this.router.navigate(['/student']);
  }
  aboutRoute(){
    this.router.navigate(['/about']);

  }


  }


