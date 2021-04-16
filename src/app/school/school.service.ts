import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedServiceService } from '../sharedService/shared-service.service';
import { FooterServiceService } from '../footer-service.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { LOAD_SPINNER, STUDENT_ID_LIST, STUDENT_BY_ID, DATA_TO_UPDATE, DB_UPDATE_DATA, ALL_STUDENTS_LIST } from '../action';
import { ResponseModel } from '../Models/response.model';


@Injectable({
  providedIn: "root",
})
export class SchoolService {
  constructor(
    private http: HttpClient,
    private sharedServiceService: SharedServiceService,
    private footerService: FooterServiceService,
    private store: Store<AppState>
  ) {}

  getAllStudents() {
    console.log("called all students");
    let result = this.http.get<ResponseModel>("http://localhost:3000/api/student").subscribe(res=>{
      console.log(res);
      this.store.dispatch({type:ALL_STUDENTS_LIST ,payload:res.data})
    })
    
    
  }
  getStudentById(id: string) {
    this.http
      .get<ResponseModel>(`http://localhost:3000/api/student/${id}`)
      .subscribe((res) => {
        this.store.dispatch({ type: DATA_TO_UPDATE, payload: res.data });
        this.store.dispatch({type:DB_UPDATE_DATA,payload:res.data});
      });
  }

  addStudent(studentData: any) {
    let url: string = `http://localhost:3000/api/student/`;
    console.log(url);
    let result = this.http.post(url, studentData);
    console.log(result);
    return result;
  }
  getUpdatedStudent(studentData: any) {
    console.log("bye");
    let url: string = "http://localhost:3000/api/student";
    let result = this.http.put(url, studentData);
    console.log(result);
    return result;
  }
  getCustomerByAge(age: number) {
    console.log("2");
    // let url:string='http://localhost:3000/api/student';
    let result = this.http.get("http://localhost:3000/api/student");
    console.log("3");
    return result;
  }
  getGuestData() {
    console.log(2);
    this.http.get("http://localhost:3000/api/student");
    let result = this.http.get("http://localhost:3000/api/student");
    console.log(3);
    console.log("Data fetched from backend");
    this.sharedServiceService.getCustomerAge(result);
  }
  getCustomerData(age: any) {
    //  this.http.get("http://localhost:3000/api/student");
    this.http.get("http://localhost:3000/api/student").subscribe((response) => {
      this.sharedServiceService.getCustomerAge(response);
    });
  }
  // string params
  // http://localhost:4200/api/student/getById/CT0014

  // query params
  // http://localhost:4200/api/student?name='bhargav'&state='va'&age=27

  getGuestAge(guest: any) {
    console.log(guest);
    let url = `http://localhost:3000/api/student?yearCompleted=${guest.year}&age=${guest.age}&pNo=${guest.phoneNumber}`;
    console.log(url);
    let result = this.http.get("http://localhost:3000/api/student");
    console.log("28");
    return result;
  }
  getFooterData() {
    console.log("this is also working");
    let response = this.http.get("http://localhost:3000/api/student");
    this.footerService.gerFooterInfo(response);
  }

  getDataById() {
    console.log("3");
    console.log("Headers called");
    let token = sessionStorage.getItem("token");
    // let headers = new HttpHeaders();
    // headers.append('Authorization', token)
    const h = new HttpHeaders({ Authorization: token });
    let res = this.http
      .get<ResponseModel>("http://localhost:3000/api/getAllIds", { headers: h })
      .subscribe(
        (res) => {
          console.log("4");
          this.store.dispatch({ type: STUDENT_ID_LIST, payload: res.data });
          console.log("5");
          this.store.dispatch({ type: LOAD_SPINNER, payload: false });
        },
        (err) => {
          console.log(err);
          this.store.dispatch({ type: LOAD_SPINNER, payload: false });
        }
      );
  }

  getInfoById(id: any) {
    let token = sessionStorage.getItem("token");
    let headers = new HttpHeaders();
    headers.append("Authorization", token);
    let res = this.http
      .get<ResponseModel>(`http://localhost:3000/api/student/${id}`, {
        headers: headers,
      })
      .subscribe(
        (res) => {
          this.store.dispatch({ type: LOAD_SPINNER, payload: false });
          this.store.dispatch({ type: STUDENT_BY_ID, payload: res.data });
        },
        (err) => {
          console.log(err);
        }
      );
  }
  deleteData(id: string) {
    let res = this.http.delete(`http://localhost:3000/api/student/${id}`);
    console.log(res);
    return res;
  }
}
