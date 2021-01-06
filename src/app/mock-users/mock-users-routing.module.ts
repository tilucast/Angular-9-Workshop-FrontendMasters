import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MockUsersComponent } from './mock-users.component';


const routes: Routes = [
  {path: '', component: MockUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MockUsersRoutingModule { }
