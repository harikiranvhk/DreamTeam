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

  constructor(private fb:FormBuilder , private loginService:LoginService) { }

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
