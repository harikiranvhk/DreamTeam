import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
<<<<<<< Updated upstream
=======
import { SchoolComponent } from './school/school.component';
import { SearchResultsComponent } from './school/search-results/search-results.component';
import { CreateStudentComponent } from './school/create-student/create-student.component';
import { EditComponent } from './school/edit/edit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GuestComponent } from './guest/guest.component';
import { CustomerFilterComponent } from './customer/customer-filter/customer-filter.component';
import { CustomerTableComponent } from './customer/customer-table/customer-table.component';
import { FooterSplitComponent } from './footer-split/footer-split.component';
import { StoreModule } from '@ngrx/store';
import {FormlyModule}from'@ngx-formly/core';
import {FormlyBootstrapModule}from'@ngx-formly/bootstrap';
import { appReducer } from './reducer';
import { StaffModule } from './staff/staff.module';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule}from'@angular/platform-browser/animations';
import { AppInterceptor } from './app.interceptor';
import { FormsComponent } from './forms/forms.component';
import { from } from 'rxjs';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    HomeComponent,
    CustomerComponent,
<<<<<<< Updated upstream
    AboutComponent
=======
    AboutComponent,
    SchoolComponent,
    SearchResultsComponent,
    CreateStudentComponent,
    EditComponent,
    GuestComponent,
    CustomerFilterComponent,
    CustomerTableComponent,
    FooterSplitComponent,
    LoginComponent,
    FormsComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< Updated upstream
  
    FormsModule
=======
    BrowserAnimationsModule,
    FormlyBootstrapModule,
    FormlyModule,
    FormsModule,
    StaffModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
