import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: "root",
})
export class SharedServiceService {
  private customer = new BehaviorSubject<any>({data:[],status:null});

  cast = this.customer.asObservable();

  constructor() {}

  getCustomerAge(customerRespone: any) {
    this.customer.next(customerRespone);
  }
  
}
