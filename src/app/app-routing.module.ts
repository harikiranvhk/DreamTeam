import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
<<<<<<< Updated upstream
=======
import{ SchoolComponent } from './school/school.component'
import { SearchResultsComponent } from './school/search-results/search-results.component';
import { CreateStudentComponent } from './school/create-student/create-student.component';
import { EditComponent } from './school/edit/edit.component';
import { GuestComponent} from './guest/guest.component';
import { StaffComponent } from './staff/staff.component';
import { CreateComponent } from './staff/create/create.component';
import { EditStaffComponent } from './staff/edit-staff/edit-staff.component';
import { DeleteComponent } from './staff/delete/delete.component';
import { LoginComponent } from './login/login.component';
import { CanDeactivateGuard } from './canDeactivate.service';
import { AuthGaurd } from './canActivate.service';
import { RoleBaseGuard } from './rolebase.canactivate.service';
import { RoleBasedChildGuard } from './childgaurd.service';
import { FormsComponent } from './forms/forms.component';

  

>>>>>>> Stashed changes


const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'employee', component:EmployeeComponent},
  {path:'footer',component:FooterComponent},
<<<<<<< Updated upstream
  {path:'home',component:HomeComponent},
  {path:'customer',component:CustomerComponent},
  {path:'about',component:AboutComponent}
=======
  {path:'forms',component:FormsComponent},
  {path:'guest', component:GuestComponent,canActivate:[AuthGaurd]},
  {path:'staff', loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule)},
  // {path: 'staff', loadChildren: './staff/staff.module#StaffModule'}
  {path:'home',component:HomeComponent,canActivate:[AuthGaurd]},
  {path:'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule)},
  {path:'customer',component:CustomerComponent,canActivate:[AuthGaurd,RoleBaseGuard]},
  {path:'about',component:AboutComponent,canActivate:[AuthGaurd]},
  {path:'school',component:SchoolComponent,canActivate:[AuthGaurd],children:[
    {path:'', redirectTo:'search-results',pathMatch:'full'},
    {path:'search-results',component:SearchResultsComponent,},
    {path:'create', component:CreateStudentComponent},
    {path:'edit/:studentId',component:EditComponent, canActivateChild:[RoleBasedChildGuard]}
  ]},
  // {path:'student',loadChildren: () => import('./student/student.module').then(m => m.StudentModule)}

>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
