import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() {
    console.log("Footer Constructor Called");
   }

  ngOnInit(){
    
      console.log("Footer Component OnInIt Called");
  
    }
  }


