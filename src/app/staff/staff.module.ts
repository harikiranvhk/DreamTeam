import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { StaffRoutingModule } from './staff-routing/staff-routing.module';
import { SearchResultsComponent } from './SearchResults/search-results/search-results.component';
import { SearchComponent } from './SearchResults/search-results/Search/search/search.component';
import { ResultsComponent } from './SearchResults/search-results/Results/results/results.component';




@NgModule({
  declarations: [StaffComponent, CreateComponent, DeleteComponent, EditStaffComponent, SearchResultsComponent, SearchComponent, ResultsComponent],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
