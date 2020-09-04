import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from '../staff.component';
import { CreateComponent } from '../create/create.component';




const routes: Routes = [
  { path: "", component: StaffComponent, children: [
      { path: "", redirectTo: "staff", pathMatch: "full" },
      { path: "create", component: CreateComponent },
    ],
  },
];
   
  
 @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
export class StaffRoutingModule { }