import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getCaseById(caseNumber:number){
    console.log(caseNumber);

    let url:string=`http://dummy.restapiexample.com/api/v1/employeesurl/${caseNumber}`;
    // console.log(url);
    // this.http.get(url);





    // This the place to write code for requesting backend
  }

newCaseName(){
  //(4) so i created this function to connect with component
  //(5) now i have the required data sent from the backend so i need to send it back the same way

   
  let url1:string='http://dummy.restapiexample.com/api/v1/employees'; 
  // saved the url in a variable 
  console.log(url1);
  let response=this.http.get(url1);
  // creating a variable response so that we can store the data that need to be sent back in a variable
  // so the data here is in http so we need to  import http module for this and install http packages in package.json
  //get here defines that we are just fetching data 
  
  console.log(response);
return response;
//return means returning the variable or anything assigned to it the same way back 
// we are returning the response variable cause all the data we need is stored in it.
//now to the component
}



}

// GET   -- To GET DATA
// POST  -- Create Data
// PUT -- Update Data
// DELETE -- DELETE Data

// CRUD -- CREATE READ UPDATE DELETE



