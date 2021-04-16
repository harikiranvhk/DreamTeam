import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldSelect } from '@ngx-formly/bootstrap';
import { FormlyField, FormlyFieldConfig,FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  form = new  FormGroup({});
  fields: FormlyFieldConfig[]=[];
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}