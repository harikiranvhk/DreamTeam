import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { AppState } from '../reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store:Store<AppState>) { 
console.log("Home component Constructor Called");


  }

  ngOnInit() {
    this.store.select(state=>state.homeState.idList).subscribe(res=>{
      console.log(res);
    })
  }

}
