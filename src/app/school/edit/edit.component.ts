import { Component, OnInit } from "@angular/core";
import { SchoolService } from "../school.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConditionalExpr } from "@angular/compiler";
import { Store, State } from "@ngrx/store";
import { AppState } from "src/app/reducer";
import { DATA_TO_UPDATE } from 'src/app/action';

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
  studentEditForm: FormGroup;


  constructor(
    private schoolService: SchoolService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.store
      .select((state) => state.homeState.dbUpdateData)
      .subscribe((res) => {
        console.log("Why am I calling");
        if (res) {
          this.patchStudentValues(res);
        }
      });
      this.studentEditForm.valueChanges.subscribe(formValueChanges=>{
        console.log('am I calling');
        this.store.dispatch({type:DATA_TO_UPDATE, payload:this.studentEditForm.getRawValue()});
      });
      
  }

  createForm() {
    this.studentEditForm = this.fb.group({
      studentId: [
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(7),
          Validators.minLength(3),
        ]),
      ],
      studentName: [""],
      studentPhoneNumber: [""],
      country: [""],
      course: [""],
      year: [""],
      _id:[""],
      __v:[""],
    });
  }

  updateStudent(e: any) {
    console.log(this.studentEditForm);
    e.preventDefault();
    if (this.studentEditForm.valid) {
      this.router.navigate(["/school/search-results"], {
        queryParams: { search: true },
      });

      this.schoolService
        .getUpdatedStudent(this.studentEditForm.value)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
  onKey(event: Event) {
    console.log("id field triggered");
    // console.log(event);
    // event.preventDefault();
  }

  patchStudentValues(result: any) {
    console.log(result);

    this.studentEditForm.patchValue({
      studentId: result.studentId,
      studentName: result.studentName,
      studentPhoneNumber: result.studentPhoneNumber,
      country: result.country,
      course: result.course,
      year: result.year,
      _id:result._id,
      __v:result.__v
    });
  }
}
