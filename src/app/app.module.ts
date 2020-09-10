import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
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
import { appReducer } from './reducer';
import { StaffModule } from './staff/staff.module';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginComponent } from './login/login.component';
import { AppInterceptor } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    HomeComponent,
    CustomerComponent,
    AboutComponent,
    SchoolComponent,
    SearchResultsComponent,
    CreateStudentComponent,
    EditComponent,
    GuestComponent,
    CustomerFilterComponent,
    CustomerTableComponent,
    FooterSplitComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StaffModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
