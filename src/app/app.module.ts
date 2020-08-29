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
import { HttpClientModule } from '@angular/common/http';
import { GuestComponent } from './guest/guest.component';
import { CustomerFilterComponent } from './customer/customer-filter/customer-filter.component';
import { CustomerTableComponent } from './customer/customer-table/customer-table.component';
import { FooterSplitComponent } from './footer-split/footer-split.component';

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
    FooterSplitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
