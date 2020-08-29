import { Component, OnInit } from "@angular/core";
import { SchoolService } from "../school.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ConditionalExpr } from '@angular/compiler';
// import { filter } from 'rxjs';
// import 'rxjs/add/operator/filter';
// import { map,filter } from 'rxjs/operators';


@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  id: string;
  studentEditForm:FormGroup;

  constructor(
    private schoolService: SchoolService,
    private route: ActivatedRoute,
    private fb:FormBuilder,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.id = this.route.snapshot.paramMap.get("studentId");
    console.log(this.id);
    this.getStudentById();

    
  }

  getStudentById() {
    this.schoolService.getStudentById(this.id).subscribe((res) => {
      console.log(res);
      this.patchStudentValues(res);
    });
  }
  createForm(){
    this.studentEditForm=this.fb.group({
      studentId:['',Validators.compose([Validators.required,Validators.maxLength(7),Validators.minLength(3)])],
      studentName:['',],
      studentPhoneNumber:[''],
      country:[''],
      course:[''],
      year:['']
    })
  }
  
  updateStudent(e:any){
    console.log(this.studentEditForm);
    e.preventDefault()
    if(this.studentEditForm.valid){
      this.router.navigate(['/school/search-results'] , { queryParams: { search: true } });

      this.schoolService.getUpdatedStudent(this.studentEditForm.value)
    .subscribe((res)=>{
      
    console.log(res)
    }
    
    )  
    }
    
    
  }
  onKey(event: Event){
    console.log('id field triggered');
    // console.log(event);
    // event.preventDefault();
  }

  patchStudentValues(result:any){
    console.log(result);

this.studentEditForm.patchValue({

  studentId:result.data.studentId,
  studentName:result.data.studentName,
  studentPhoneNumber:result.data.studentPhoneNumber,
  country:result.data.country,
  course:result.data.course,
  year:result.data.year
})

  }
}


  