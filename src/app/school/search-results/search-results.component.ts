import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  showTable:boolean=false;
  studentResponse:any;

  constructor(private schoolService:SchoolService,private router:Router) { }

  ngOnInit(): void {

    

  }
  



  studentResults(){
    console.log("student is called");
    this.schoolService.getAllStudents().subscribe(result =>{
      console.log(result);
      this.showTable=true;
      this.studentResponse=result;

    });
    
    
  }

  createFunction(){
    console.log("hi");
    this.router.navigate(['/school/create']);
}

editFunction(id:string){
  // console.log(`/school/edit/${id}`)
  this.router.navigate([`/school/edit/${id}`]);
}
}
