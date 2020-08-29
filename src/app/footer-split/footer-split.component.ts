import { Component, OnInit } from '@angular/core';
import { FooterServiceService } from '../footer-service.service';

@Component({
  selector: 'app-footer-split',
  templateUrl: './footer-split.component.html',
  styleUrls: ['./footer-split.component.scss']
})
export class FooterSplitComponent implements OnInit {
  footerInfo:any;
  showTable:boolean;

  constructor(private footerService:FooterServiceService) { }

  ngOnInit(): void {
    this.footerService.cast
    .subscribe(res=>{
      console.log(res)
 })
  }
  
}
