import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedServiceService } from '../sharedService/shared-service.service';
import { FooterServiceService } from '../footer-service.service'

@Injectable({
  providedIn: "root",
})
export class SchoolService {
  constructor(
    private http: HttpClient,
    private sharedServiceService: SharedServiceService,
    private footerService:FooterServiceService
  ) {}

  getAllStudents() {
    console.log("called all students");
    let url: string = "http://localhost:3000/api/student";
    console.log(url);
    let result = this.http.get(url);
    console.log(result);
    return result;
  }
  getStudentById(id: string) {
    console.log("called the required id");
    let url: string = `http://localhost:3000/api/student/${id}`;
    console.log(url);
    let result = this.http.get(url);
    console.log(result);
    return result;
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
 getFooterData(){
   console.log("this is also working");
   let response = this.http.get("http://localhost:3000/api/student");
  this.footerService.gerFooterInfo(response);
 }


 getDataById(){
  let res = this.http.get("http://localhost:3000/api/getAllIds");
  return res

 }
 getInfoById(id:any){
   let res = this.http.get(`http://localhost:3000/api/student/${id}`);
   return res
 }
 deleteData(id:string){
   let res = this.http.delete(`http://localhost:3000/api/student/${id}`);
   console.log(res);
   return res;
 }
 
}
