import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/sharedService/shared-service.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {
  customerResponse: any;
  showTable:boolean;
  

  constructor(private shared:SharedServiceService) { }

  ngOnInit(): void {
    this.shared.cast
    .subscribe(res=>{
    console.log(res);
    this.customerResponse = res;
      this.showTable = true;
    
    })
    
  }


}
