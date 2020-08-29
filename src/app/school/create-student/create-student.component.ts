import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SchoolService } from "../school.service";

@Component({
  selector: "app-create-student",
  templateUrl: "./create-student.component.html",
  styleUrls: ["./create-student.component.scss"],
})
export class CreateStudentComponent implements OnInit {
  formSubmitStatus: boolean;

  studentCreateForm: FormGroup;

  constructor(private fb: FormBuilder, private schoolService: SchoolService) {}

  ngOnInit(): void {
    this.createForm();
    // this.studentCreateForm.valueChanges.subscribe(formData=>{
    //   console.log(formData);
    this.studentCreateForm.controls.studentName.valueChanges.subscribe(
      (formData) => {
        if (formData.course || formData.year) {
          console.log("course value entered");
          this.studentCreateForm
            .get("year")
            .setValidators(Validators.compose([Validators.required]));
          this.studentCreateForm
            .get("year")
            .updateValueAndValidity({ emitEvent: false });
          this.studentCreateForm
            .get("course")
            .setValidators(Validators.compose([Validators.required]));
          this.studentCreateForm
            .get("course")
            .updateValueAndValidity({ emitEvent: false });
        } else {
          console.log("Still Waiting");
          this.studentCreateForm.get("year").setValidators([]);
          this.studentCreateForm
            .get("year")
            .updateValueAndValidity({ emitEvent: false });
          this.studentCreateForm.get("course").setValidators([]);
          this.studentCreateForm
            .get("course")
            .updateValueAndValidity({ emitEvent: false });
        }
        console.log(formData);
      }
    );
  }

  createForm() {
    this.studentCreateForm = this.fb.group({
      studentId: [null, Validators.compose([Validators.required])],
      studentName: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(4),
        ]),
      ],
      studentPhoneNumber: [null],
      country: [null],
      course: [null],
      year: [null],
    });
  }
  createStudent() {
    console.log(this.studentCreateForm);
    if (this.studentCreateForm.valid) {
      this.schoolService
        .addStudent(this.studentCreateForm.value)
        .subscribe((res) => {
          console.log(res);
          this.formSubmitStatus = true;
        });
    }
  }
}
