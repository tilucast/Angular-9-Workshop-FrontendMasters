import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MockUsersRoutingModule } from './mock-users-routing.module';
import { MockUsersComponent } from './mock-users.component';


@NgModule({
  declarations: [MockUsersComponent],
  imports: [
    CommonModule,
    MockUsersRoutingModule
  ]
})
export class MockUsersModule { }
