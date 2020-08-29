import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterServiceService {
  private footer = new BehaviorSubject<any>({data:[],status:null});

  cast = this.footer.asObservable();

  constructor() { }

  gerFooterInfo(info:any){
    this.footer.next(info) // make it empty parameter for a doubt
    



  }
}
