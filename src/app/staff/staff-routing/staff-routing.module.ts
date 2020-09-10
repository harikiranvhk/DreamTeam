import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from '../staff.component';
import { CreateComponent } from '../create/create.component';
import { SearchResultsComponent } from '../SearchResults/search-results/search-results.component';




const routes: Routes = [
  { path: "", component: StaffComponent, children: [
      { path: "", redirectTo: "search-results", pathMatch: "full" },
      { path: "search-results", component: SearchResultsComponent },
    ],
  },
];
   
  
 @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
export class StaffRoutingModule { }