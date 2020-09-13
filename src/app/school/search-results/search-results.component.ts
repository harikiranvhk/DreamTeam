import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/reducer';
import { Store } from '@ngrx/store';
import { StudentModel } from 'src/app/Models/StudentModel';
import { LOAD_SPINNER } from 'src/app/action';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  showTable:boolean=false;
  studentResponse:Array<StudentModel>;


  constructor(private schoolService:SchoolService,private router:Router, private route:ActivatedRoute, private store:Store<AppState>) { }

  ngOnInit(): void {

    this.store.select(state=>state.homeState.allStudentsList).subscribe(res=>{
      this.studentResponse=res;

    })
    this.route.queryParams
    // .filter(params=> params.search)
    .subscribe(params=>{
      console.log(params);
      if(params.search) {
        this.studentResults();
      }
    })

    

  }
  



  studentResults(){
    console.log("student is called");
    this.store.dispatch({type:LOAD_SPINNER,payload:true})
    this.schoolService.getAllStudents();
    // this.schoolService.getAllStudents().subscribe(result =>{


    //   console.log(result);
    //   this.showTable=true;
    //   this.studentResponse=result;

    // });
    
    
  }

  createFunction(){
    console.log("hi");
    this.router.navigate(['/school/create']);
}

editFunction(id:string){
  this.router.navigate([`/school/edit/${id}`]);
  this.schoolService.getStudentById(id);
  // console.log(`/school/edit/${id}`)
  
}
deleteStudent(id:string){
  this.schoolService.deleteData(id).subscribe(res=>{
   console.log(res)
   this.studentResults();
  })
}
}
