import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  

  constructor(private http:HttpClient) { }

  getAllStudents(){
    console.log("called all students");
    let url:string='http://localhost:3000/api/student';
    console.log(url);
    let result=this.http.get(url);
    console.log(result);
    return result;

}
}
