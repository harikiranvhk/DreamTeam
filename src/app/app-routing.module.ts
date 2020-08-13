import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import{ SchoolComponent } from './school/school.component'
import { SearchResultsComponent } from './school/search-results/search-results.component';
import { CreateStudentComponent } from './school/create-student/create-student.component';
import { EditComponent } from './school/edit/edit.component';
  



const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'employee', component:EmployeeComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:HomeComponent},
  {path:'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule)},
  {path:'customer',component:CustomerComponent},
  {path:'about',component:AboutComponent},
  {path:'school',component:SchoolComponent,children:[
    {path:'', redirectTo:'search-results',pathMatch:'full'},
    {path:'search-results',component:SearchResultsComponent},
    {path:'create', component:CreateStudentComponent},
    {path:'edit/:studentId',component:EditComponent}
  ]},
  // {path:'student',loadChildren: () => import('./student/student.module').then(m => m.StudentModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
