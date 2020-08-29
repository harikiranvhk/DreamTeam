import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school/school.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
footerInfo:any;
showTable:boolean=false;
guestForm:FormGroup
  constructor(private schoolService:SchoolService) {
    console.log("Footer Constructor Called");
   }

  ngOnInit(){
    
      console.log("Footer Component OnInIt Called");
  }
  footerData(){
    console.log('Hi')
  }
    
  }


