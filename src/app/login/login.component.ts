import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private fb:FormBuilder , private loginService:LoginService) { 
    
    let student1 = {
      name: 'abc',
      id: 'CT101',
      email: 'abc@gmail.com',
      phoneNumber: '7321265639'
    }
    let student2 = {
      name: 'abc',
      id: 'CT101',
      email: 'abc@gmail.com',
      phoneNumber: '7321265639'
    }
    let student1Keys = Object.keys(student1);
    let student2Keys = Object.keys(student2);
    console.log(student1["name"]);
    console.log(student1Keys);
    console.log(student2Keys);
    student1Keys.forEach(key => {
      console.log(key);
      if(student1[key] !== student2[key]){
        console.log(key, false);
        // return ;
      }
    });
    // return true;
    let a={hero:'spiderman'};
    let b={hero:'superman'};
    
    let validity = this.checkEquality(a,b);
    console.log(validity);
      }
      checkEquality(a,b) {
        let result =a.hero===b.hero;
        // console.log(result);
        return result;
      }

  ngOnInit(): void {
    this.createForm();
  }
createForm(){
  this.loginForm=this.fb.group({
    userName:[null,Validators.compose([Validators.required])],
    password:[null,Validators.compose([Validators.required])],
  })
}
loginFunction(){
  console.log(this.loginForm.value);  
  let loginCredentials=this.loginForm.value;
  this.loginService.getLoginCredentials(loginCredentials);
  
  
  
}
}
