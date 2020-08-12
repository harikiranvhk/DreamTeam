import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { 
console.log("Home component Constructor Called");


  }

  ngOnInit() {
    console.log("Home Component OnInIt Called");
  }

}
